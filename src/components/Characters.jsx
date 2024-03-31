import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import LukeImg from '../img/character-images/luke.png';
import C3POImg from '../img/character-images/C-3PO.png';
import R2D2Img from '../img/character-images/R2-D2.png';
import DarthImg from '../img/character-images/darth-vader.png';
import LeiaImg from '../img/character-images/leia.png';
import OwenImg from '../img/character-images/owen.png';
import BeruImg from '../img/character-images/beru.png';
import R5D4Img from '../img/character-images/R5D4.png';
import BiggsImg from '../img/character-images/biggs.png';
import ObiImg from '../img/character-images/obi.png';
import { useFavorites } from '../context/FavoritesContext';

const Characters = () => {
  const resource = 'people';
  const { isLoading, data: characters, error } = useFetchApi(resource);
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();

  const handleAddToFavorites = (item) => {
    //To check if the item was already added and avoid error
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
    <div className="container">
      {isLoading ? (
        <p className='text-primary fs-4'>Loading...</p>
      ) : error ? (
        <p>Error fetching characters: {error.message}</p>
      ) : (
        <div className=''>
          <h2 className="text-center mb-3 mt-3 text-warning">Star Wars Characters</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {characters.map((character) => (
              <div key={character.url} className="col">
                <div className="card h-100 rounded-4">
                {character.name === 'Luke Skywalker' && <img src={LukeImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'C-3PO' && <img src={C3POImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'R2-D2' && <img src={R2D2Img} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'Darth Vader' && <img src={DarthImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'Leia Organa' && <img src={LeiaImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'Owen Lars' && <img src={OwenImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'Beru Whitesun lars' && <img src={BeruImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'R5-D4' && <img src={R5D4Img} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'Biggs Darklighter' && <img src={BiggsImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                {character.name === 'Obi-Wan Kenobi' && <img src={ObiImg} className="card-img-top rounded-3 img-fluid" alt={character.name} />}
                  <div className="card-body rounded-4">
                    <h5 className="card-title text-warning text-center">{character.name}</h5>
                    <p className="card-text text-light">
                      <span className='text-warning'>Height:</span> {character.height}<br />
                      <span className='text-warning'>Gender:</span> {character.gender}<br />
                      <span className='text-warning'>Mass:</span> {character.mass}<br />
                      <span className='text-warning'>Hair Color:</span> {character.hair_color}<br />
                      <span className='text-warning'>Eye Color:</span> {character.eye_color}<br />
                      <span className='text-warning'>Birth Year:</span> {character.birth_year}<br />
                      <span className='text-warning'>Skin Color:</span> {character.skin_color}<br />
                      <span className='text-warning'>Homeworld:</span> {character.homeworld}<br />
                    </p>
                    <button className='btn btn-primary m-1 fs-5' onClick={() => handleAddToFavorites(character)}>❤️</button>
                    <button className='btn btn-light m-1 text-light fs-5' onClick={() => handleRemoveFromFavorites(character)}>➖</button>
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

export default Characters;
