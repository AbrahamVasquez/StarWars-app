import { useContext, useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item]);
    };

    const removeFromFavorites = (itemToRemove) => {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((item) => item.url !== itemToRemove.url)
        );
      };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}