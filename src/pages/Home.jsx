import { useEffect, useState } from 'react';
import { auth } from '../firebase';
// import {Navbar} from '../components/Navbar';
import "../styles/style.css";
import Characters from '../components/Characters';

export const Home = () => {

  const [userPhotoURL, setUserPhotoURL] = useState('');

  useEffect(() => {

    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserPhotoURL(user.photoURL);
      } else {
        setUserPhotoURL('');
      }
    });
    return () => unsub();
  }, [])
  
  return (
    // set it as default
    <div className="home-container text-primary">
      <Characters />
    </div>
  );
}

export default Home;