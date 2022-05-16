import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CharacterList from '../components/characters/CharacterList';

function AllCharactersPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedCharacters, setLoadedCharacters] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    try {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const res = data.results;
          setLoadedCharacters(res);
        });
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Container>
      <Row>
        <h1 className='text-center mt-4 mb-4'>All Characters</h1>
        <CharacterList characters={loadedCharacters} />
      </Row>
    </Container>
  );
}

export default AllCharactersPage;
