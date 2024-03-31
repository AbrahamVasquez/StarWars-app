import { useFavorites } from '../context/FavoritesContext';

export const FavoritesList = () => {
  const { favorites } = useFavorites();

  return (
    <div className='text-center mt-5'>
      <h2 className='text-warning mb-5'>Your Favorites ⭐</h2>
      <ul className='text-light'>
        {favorites.map((favItem) => (
            <li key={`${favItem.url} ${favItem.name}`}>
                {favItem.name} {favItem.title}
            </li>
        ))}
      </ul>
    </div>
  );
};
