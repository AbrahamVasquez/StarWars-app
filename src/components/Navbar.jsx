import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import { useFavorites } from '../context/FavoritesContext';
import { Profile } from './Profile';

export const Navbar = ({ userPhotoURL, logoutBtn }) => {
  const { favorites } = useFavorites(); 

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid p-0">
        <Link className="navbar-brand" to="/">
          <img className="rounded-circle mx-3" src={Logo} alt="Logo" style={{ width: '70px', height: 'auto' }} />
        </Link>
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 fs-4 text-center">
            <li className="nav-item me-5 rounded-5">
              <Link className="nav-link text-info ms-5 m-1 me-5" to="/characters">Characters</Link>
            </li>
            <li className="nav-item me-5 rounded-5">
              <Link className="nav-link ms-5 text-info p-2 m-1 me-5" to="/planets">Planets</Link>
            </li>
            <li className="nav-item me-5 rounded-5">
              <Link className="nav-link ms-5 text-info m-1 me-5" to="/films">Films</Link>
            </li>
            <li className="nav-item me-5 rounded-5">
              <Link className="nav-link ms-5 text-info p-2 m-1 me-5" to="/starships">Vehicles</Link>
            </li>
            <li className="nav-item me-5 rounded-5">
              <Link className="nav-link ms-5 text-info p-2 m-1 me-3 fav" to="/favorites">Favorites❤️ ({favorites.length})</Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <Profile userPhotoURL={userPhotoURL} logoutBtn={true} />
        </div>
      </div>
    </nav>
    {/* Render FavoritesList component in the navbar
    <FavoritesList /> */}
    </>
  );
};

