export async function getPokemonApi () {
  const pokemonArry = []
  for (let i = 1; i <= 10; i++ ) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const obj = await result.json();
    pokemonArry.push(obj)
  }
  return pokemonArry
}

