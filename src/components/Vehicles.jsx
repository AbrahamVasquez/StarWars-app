import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import V1 from '../img/vehicle-images/vehicle1.png';
import V2 from '../img/vehicle-images/vehicle2.png';
import V3 from '../img/vehicle-images/vehicle3.png';
import V4 from '../img/vehicle-images/vehicle4.png';
import V5 from '../img/vehicle-images/vehicle5.png';
import V6 from '../img/vehicle-images/vehicle6.png';
import V7 from '../img/vehicle-images/vehicle7.png';
import V8 from '../img/vehicle-images/vehicle8.png';
import V9 from '../img/vehicle-images/vehicle9.png';
import V10 from '../img/vehicle-images/vehicle10.png';
import { useFavorites } from '../context/FavoritesContext';

const Vehicles = () => {
  const { isLoading, data: starships, error } = useFetchApi('starships', ''); // Fetch films data

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
      <h2 className='text-warning text-center mt-3'>Star Wars Vehicles</h2>
      {isLoading ? (
        <p className='text-primary fs-4'>Loading...</p>
      ) : error ? (
        <p>Error getting vehicles {error}</p>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {starships.map((vehicle) => (
            <div key={vehicle.url} className="col">
            <div className="card h-100 rounded-4">
            {vehicle.name === 'CR90 corvette' && <img src={V1} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Star Destroyer' && <img src={V2} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Sentinel-class landing craft' && <img src={V3} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Death Star' && <img src={V4} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Millennium Falcon' && <img src={V5} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Y-wing' && <img src={V6} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'X-wing' && <img src={V7} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'TIE Advanced x1' && <img src={V8} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Executor' && <img src={V9} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}
            {vehicle.name === 'Rebel transport' && <img src={V10} className="card-img-top rounded-3 img-fluid" alt={vehicle.name} />}

              <div className="card-body rounded-4">
                <h5 className="card-title text-warning text-center">{vehicle.name}</h5>
                <p className="card-text text-light text-center">
                  <span className='text-warning'>Name: {vehicle.name}</span><br />
                  <span className='text-warning'>Model:</span> {vehicle.model}<br />
                  <span className='text-warning'>Manufacturer:</span> {vehicle.manufacturer}<br />
                  <span className='text-warning'>Cost in credits:</span> {vehicle.cost_in_credits}<br />
                  <span className='text-warning'>Length:</span> {vehicle.length}<br />
                  <span className='text-warning'>Max atmosphering speed:</span> {vehicle.max_atmosphering_speed}<br />
                  <span className='text-warning'>Crew:</span> {vehicle.crew}<br />
                  <span className='text-warning'>Passengers:</span> {vehicle.passengers}<br />
                  <span className='text-warning'>Cargo capacity:</span> {vehicle.cargo_capacity}<br />
                  <span className='text-warning'>Consumables:</span> {vehicle.consumables}<br />
                  <span className='text-warning'>Hyperdrive rating:</span> {vehicle.hyperdrive_rating}<br />
                  <span className='text-warning'>MGLT:</span> {vehicle.MGLT}<br />
                  <span className='text-warning'>Starship class:</span> {vehicle.starship_class}<br />
                </p>
                <button className='btn btn-primary m-1 fs-5' onClick={() => handleAddToFavorites(vehicle)}>❤️</button>
                <button className='btn btn-light m-1 text-light fs-5' onClick={() => handleRemoveFromFavorites(vehicle)}>➖</button>
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

export default Vehicles;
