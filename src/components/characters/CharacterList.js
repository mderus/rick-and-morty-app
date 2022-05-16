import CharacterItem from './CharacterItem';

function CharacterList(props) {
  return (
    <>
      {props.characters.map((character) => (
        <CharacterItem
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </>
  );
}

export default CharacterList;
