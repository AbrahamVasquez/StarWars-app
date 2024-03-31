import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import Planet1 from '../img/planet-images/planet1.png';
import Planet2 from '../img/planet-images/planet2.png';
import Planet3 from '../img/planet-images/planet3.png';
import Planet4 from '../img/planet-images/planet4.png';
import Planet5 from '../img/planet-images/planet5.png';
import Planet6 from '../img/planet-images/planet6.png';
import Planet7 from '../img/planet-images/planet7.png';
import Planet8 from '../img/planet-images/planet8.png';
import Planet9 from '../img/planet-images/planet9.png';
import Planet10 from '../img/planet-images/planet10.png';
import { useFavorites } from '../context/FavoritesContext';

const Planets = () => {
  const { isLoading, data: planets, error } = useFetchApi('planets', ''); // Fetch films data

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
      <h2 className='text-warning text-center mt-3'>Star Wars Planets</h2>
      {isLoading ? (
        <p className='text-primary fs-4'>Loading...</p>
      ) : error ? (
        <p>Error getting Planets {error}</p>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {planets.map((planet) => (
            <div key={planet.url} className="col">
            <div className="card h-100 rounded-4">
            {planet.name === 'Tatooine' && <img src={Planet1} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Alderaan' && <img src={Planet2} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Yavin IV' && <img src={Planet3} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Hoth' && <img src={Planet4} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Dagobah' && <img src={Planet5} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Bespin' && <img src={Planet6} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Endor' && <img src={Planet7} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Naboo' && <img src={Planet8} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Coruscant' && <img src={Planet9} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
            {planet.name === 'Kamino' && <img src={Planet10} className="card-img-top rounded-3 img-fluid" alt={planet.name} />}
              <div className="card-body rounded-4">
                <h5 className="card-title text-warning text-center">{planet.name}</h5>
                <p className="card-text text-light text-center">
                <span className='text-warning'>Name:</span> {planet.name}<br />
                  <span className='text-warning'>Rotation period:</span> {planet.rotation_period}<br />
                  <span className='text-warning'>Orbital period:</span> {planet.orbital_period}<br />
                  <span className='text-warning'>Diameter:</span> {planet.diameter}<br />
                  <span className='text-warning'>Climate:</span> {planet.climate}<br />
                  <span className='text-warning'>Gravity:</span> {planet.gravity}<br />
                  <span className='text-warning'>Terrain:</span> {planet.terrain}<br />
                  <span className='text-warning'>Surface_water:</span> {planet.surface_water}<br />
                  <span className='text-warning'>Population:</span> {planet.population}<br />
                </p>
                <button className='btn btn-primary m-1 fs-5' onClick={() => handleAddToFavorites(planet)}>❤️</button>
                <button className='btn btn-light m-1 text-light fs-5' onClick={() => handleRemoveFromFavorites(planet)}>➖</button>
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

export default Planets;
