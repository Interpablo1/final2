import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then((response) => setPokemons(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleSelect = (pokemon) => {
    axios.get(pokemon.url)
      .then((response) => {
        setSelectedPokemon(response.data);
        setModalOpen(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} onSelect={handleSelect} />
      ))}
      {selectedPokemon && (
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          pokemonDetails={selectedPokemon}
        />
      )}
    </div>
  );
};

export default Home;
