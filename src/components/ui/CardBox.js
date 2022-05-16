import Card from 'react-bootstrap/Card';

function CardBox(props) {
  return <Card style={{width: '18rem'}}>{props.children}</Card>;
}

export default CardBox;
