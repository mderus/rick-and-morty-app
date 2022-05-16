import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import FavoritesContext from '../../store/favorite-context';

import CardBox from '../ui/CardBox';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CharacterItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        name: props.name,
        image: props.image,
      });
    }
  }

  const navigate = useNavigate();

  return (
    <Col className='mb-5 d-flex justify-content-center'>
      <CardBox>
        <Card.Img variant='top' src={props.image} />
        <Card.Body>
          <Card.Title className='text-center mt-2 mb-4'>
            {props.name}
          </Card.Title>
          <Col className='d-flex justify-content-around'>
            <Button
              variant='primary'
              onClick={() => navigate(`/character/${props.id}`)}
            >
              Show More
            </Button>
            <Button
              variant='outline-primary'
              onClick={toggleFavoriteStatusHandler}
            >
              {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
            </Button>
          </Col>
        </Card.Body>
      </CardBox>
    </Col>
  );
}

export default CharacterItem;
