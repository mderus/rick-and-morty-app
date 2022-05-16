import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import CharacterList from '../components/characters/CharacterList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MyFavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Add some characters.</p>;
  } else {
    content = <CharacterList characters={favoritesCtx.favorites} />;
  }

  return (
    <Container>
      <Row>
        <h1 className='text-center mt-4 mb-4'>Favorite Characters</h1>
        {content}
      </Row>
    </Container>
  );
}

export default MyFavoritesPage;
