import { useState } from 'react';
import Add from "../img/addAvatar.png";
import Logo from "../img/logo.png";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import "../styles/style.css";

export const Register = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    file: null,
  });
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // To check upload progress
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    const { displayName, email, password, file } = formData;
  
    // Perform manual form validation
    if (!displayName || !email || !password || !file) {
      setErr(true);
      setLoading(false);
      return;
    }
  
    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      // Create an unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
  
      // Upload file to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(progress);
        },
        (error) => {
          console.log(error);
          setErr(true);
          setLoading(false);
        },
        () => {
          // Get download URL of uploaded file
          getDownloadURL(storageRef)
            .then(async (downloadURL) => {
              // Update user profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
  
              // Create user document in Firestore database
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
              setErr(true);
              setLoading(false);
            });
        }
      );
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };
  

  return (
    <div className="login-register d-flex flex-column align-items-center justify-content-center min-vh-100">
      <img className="logo mb-1" src={Logo} alt="Logo" />
      <span className="title mb-4 text-center">Start your adventure by signing up</span>
      <form onSubmit={handleSubmit} className='p-4'>
        <input
          required
          type="text"
          placeholder="Name"
          name="displayName"
          value={formData.displayName}
          onChange={handleInputChange}
          className='mb-3 form-control border-0 rounded-4'
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className='mb-3 form-control border-0 rounded-4'
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className='mb-3 form-control border-0 rounded-4'
        />
        <input
          required
          style={{ display: "none" }}
          type="file"
          id="file"
          name="file"
          onChange={handleInputChange}
          className='mb-3'
        />
        <label htmlFor="file">
          <img src={Add} alt="Add Avatar" className="w-25"/>
          <span>Add an avatar</span>
        </label>
        <button disabled={loading} className="btn bg-warning rounded-4 w-100 mt-3 text-black">Sign up</button>
        {loading && <span>{`Uploading and compressing the image: ${uploadProgress}%`}</span>}
        {err && <span>Something went wrong 🚫</span>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register