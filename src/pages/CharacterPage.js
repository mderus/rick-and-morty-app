import {useState, useEffect, useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import Button from 'react-bootstrap/Button';

function CharacterPage() {
  const pathname = window.location.pathname;
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://rickandmortyapi.com/api${pathname}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const res = data;
          setCharacterInfo(res);
        });
    } catch (e) {
      console.error(e);
    }
  }, [pathname]);

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(characterInfo.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(characterInfo.id);
    } else {
      favoritesCtx.addFavorite({
        id: characterInfo.id,
        name: characterInfo.name,
        image: characterInfo.image,
      });
    }
  }

  return (
    <div className='mt-5 d-flex align-items-center flex-column'>
      <img
        src={characterInfo.image}
        alt='character_image'
        style={{borderRadius: '50%'}}
      />
      <h1 className='mt-4 text-center'>{characterInfo.name}</h1>
      <div className='mt-4 text-center'>
        <p style={{fontSize: '24px'}}>Status: {characterInfo.status}</p>
        <p style={{fontSize: '24px'}}>Species: {characterInfo.species}</p>
        <p style={{fontSize: '24px'}}>Gender: {characterInfo.gender}</p>
        {characterInfo.type ? (
          <p style={{fontSize: '24px'}}>Type: {characterInfo.type}</p>
        ) : (
          ''
        )}
        <p style={{fontSize: '24px'}}>Created: {characterInfo.created}</p>
      </div>
      <Button
        variant='outline-primary mt-2 mb-4'
        onClick={toggleFavoriteStatusHandler}
      >
        {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
      </Button>
    </div>
  );
}

export default CharacterPage;
