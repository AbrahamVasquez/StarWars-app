import { useEffect, useState } from 'react';
import Logo from "../img/logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "../styles/style.css";
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';


export const Login = () => {
  const [err, setErr] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && location.pathname !== '/login') {
        getUserPhoto(user.uid); // Get profile picture when user is logged in and not on the login page
      } else {
        setUserPhoto(null); // Reset profile picture when user logs out or on the login page
      }
    });

    return () => unsubscribe();
  }, [location]);

  const getUserPhoto = async (userId) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        setUserPhoto(userData.photoURL);
      } else {
        setUserPhoto(null);
        // Redirect to registration page if user data doesn't exist in Firebase
        navigate("/register");
      }
    } catch (error) {
      console.error('Error loading picture, try again please', error);
      setUserPhoto(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Perform form validation
    if (!email || !password) {
      setErr(true);
      return;
    }

    try {
      // Sign in with Firebase authentication
      await signInWithEmailAndPassword( auth, email, password);
      setErr(false);
      navigate("/");
    } catch (error) {
      console.error('Error signing in:', error.message);
      setErr(true);
    }
  };

  return (
    <div className="login-register d-flex flex-column align-items-center justify-content-center vh-100 ">
      <img className="logo mb-1" src={Logo} alt="Logo" />
      <span className="title mb-4 text-center">Continue your adventure by logging in</span>
      <form onSubmit={handleSubmit} className='p-4'>
        <div className='mb-3'>
          <input type="email" name="email" placeholder="Email" className='rounded-4 p-1 border-0'/>
        </div>
        <div className='mb-3'>
          <input type="password" name="password" placeholder="Password" className='rounded-4 p-1 border-0'/>
        </div>
        <button type="submit" className="btn bg-warning rounded-4 w-100 mt-1 text-black">Log in</button>
        {err && <span className="text-danger">Incorrect username or password. 🚫</span>}
      </form>
      {userPhoto && <img src={userPhoto} alt="Profile" className="profile-picture" />}
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
