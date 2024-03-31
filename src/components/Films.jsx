import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import Film1 from '../img/films-images/film1.png';
import Film2 from '../img/films-images/film2.png';
import Film3 from '../img/films-images/film3.png';
import Film4 from '../img/films-images/film4.png';
import Film5 from '../img/films-images/film5.png';
import Film6 from '../img/films-images/film6.png';
import { useFavorites } from '../context/FavoritesContext';
import { FavoritesList } from './FavoritesList';

const Films = () => {
  const { isLoading, data: films, error } = useFetchApi('films', ''); // Fetch films data
  const sortedFilms = films.sort((a, b) => a.episode_id - b.episode_id);

  const { addToFavorites, removeFromFavorites, favorites } = useFavorites(); 

  const handleAddToFavorites = (item) => {
    const alreadySelected = favorites.some((favItem) => favItem.url === item.url);

    if (!alreadySelected) {
      addToFavorites(item);
    } else {
      alert("Already added to your favorites");
    }
  };
  const handleRemoveFromFavorites = (item) => {
    removeFromFavorites(item);
  };

  return (
    <div className='container'>
      <h2 className='text-warning text-center mt-3'>Star Wars Films</h2>
      {isLoading ? (
        <p className='text-primary fs-4'>Loading...</p>
      ) : error ? (
        <p>Error getting Films {error}</p>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {sortedFilms.map((film) => (
            <div key={film.url} className="col">
            <div className="card h-100 rounded-4">
            {film.title === 'A New Hope' && <img src={Film1} className="card-img-top rounded-3 img-fluid" alt={film.title} />}
            {film.title === 'The Empire Strikes Back' && <img src={Film2} className="card-img-top rounded-3 img-fluid" alt={film.title} />}
            {film.title === 'Return of the Jedi' && <img src={Film3} className="card-img-top rounded-3 img-fluid" alt={film.title} />}
            {film.title === 'The Phantom Menace' && <img src={Film4} className="card-img-top rounded-3 img-fluid" alt={film.title} />}
            {film.title === 'Attack of the Clones' && <img src={Film5} className="card-img-top rounded-3 img-fluid" alt={film.title} />}
            {film.title === 'Revenge of the Sith' && <img src={Film6} className="card-img-top rounded-3 img-fluid" alt={film.title} />}
              <div className="card-body rounded-4">
                <h5 className="card-title text-warning text-center">{film.title}</h5>
                <p className="card-text text-light text-center">
                  <span className='text-warning'>Episode: {film.episode_id}</span><br />
                  <span className='text-warning'>Opening Crawl:</span> {film.opening_crawl}<br />
                  <span className='text-warning'>Director:</span> {film.director}<br />
                  <span className='text-warning'>Producer:</span> {film.producer}<br />
                  <span className='text-warning'>Release Date:</span> {film.release_date}<br />
                </p>
                <button className='btn btn-primary m-1 fs-5' onClick={() => handleAddToFavorites(film)}>❤️</button>
                <button className='btn btn-light m-1 text-light fs-5' onClick={() => handleRemoveFromFavorites(film)}>➖</button>
              </div>
            </div>
          </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default Films;
