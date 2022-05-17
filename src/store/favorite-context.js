import {createContext, useState, useEffect} from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteCharacter) => {},
  removeFavorite: (characterId) => {},
  itemIsFavorite: (characterId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const favCharactersData = JSON.parse(localStorage.getItem('userFavorites'));

    if (favCharactersData) {
      setUserFavorites(favCharactersData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
  }, [userFavorites]);

  function addFavoriteHandler(favoriteCharacter) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCharacter);
    });
  }

  function removeFavoriteHandler(characterId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(
        (character) => character.id !== characterId
      );
    });
  }

  function itemIsFavoriteHandler(characterId) {
    return userFavorites.some((character) => character.id === characterId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
