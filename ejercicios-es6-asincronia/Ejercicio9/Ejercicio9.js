const img = document.querySelector('.random-image');

const getRandomPokemonId = () => {
  return Math.floor(Math.random() * 151) + 1; 
};

const loadRandomPokemon = () => {
  const randomId = getRandomPokemonId();
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      const imageUrl = pokemon.sprites.other['official-artwork'].front_default 
      img.src = imageUrl;
    
    })
    .catch((error) => {
      console.error('No carga el Pokémon:', error);
    });
};

loadRandomPokemon();
