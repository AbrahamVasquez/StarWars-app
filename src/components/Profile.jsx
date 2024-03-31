import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

export const Profile = ({logoutBtn}) => {
  const [userDisplayName, setUserDisplayName] = useState('')
  const [userPhotoURL, setUserPhotoURL] = useState('');

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User logged in:', user);
        setUserDisplayName(user.displayName || '');
        setUserPhotoURL(user.photoURL || ''); 
      } else {
        setUserDisplayName('');
        setUserPhotoURL('');
      }
    });
    return () => unsub();
  }, []);

  const handleLogOut = () => {
    auth.signOut().then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link className='nav-link text-center' to="/profile">
          <img src={userPhotoURL} alt="User Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <span className='ml-2 m-2 text-light'>{userDisplayName}</span>
        </Link>
      </li>
      {!logoutBtn && (
        <li className="text-center mt-5">
          <button className="btn rounded-4" onClick={handleLogOut}>Log out</button>
        </li>
      )}
    </ul>
  );
};

