import { getPokemonApi } from "./pokeapi.js"

const olPokedex$$ = document.querySelector("#pokedex")

const mapPokemons = (pokemons)=> {
    // console.log(pokemons)
    return pokemons.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
}))}



const drawPokemon = (pokemons) => {
    olPokedex$$.innerHTML = "";
    for (const pokemon of pokemons) {
      let liPokedex$$ = document.createElement("li");
      liPokedex$$.setAttribute("class", "card")
  
      let pokemonName$$ = document.createElement("h2");
      pokemonName$$.textContent = pokemon.name;
      pokemonName$$.setAttribute("class", "card-title")
  
      let pokemonImage$$ = document.createElement("img");
      pokemonImage$$.setAttribute("src", pokemon.image);
      pokemonImage$$.setAttribute("alt", pokemon.name);
      pokemonImage$$.setAttribute("class", "card-image")
  
      let type$$ = document.createElement("p");
      type$$.textContent = pokemon.type;
     
      olPokedex$$.appendChild(liPokedex$$);
      liPokedex$$.appendChild(pokemonName$$);
      liPokedex$$.appendChild(pokemonImage$$);
      liPokedex$$.appendChild(type$$);
    }
}

// const drawSearch = (pokemons) => {
//     const input$$ = document.createElement("input");
//     document.body.appendChild(input$$)
//     input$$.addEventListener("input", () => {
//       searchPokemon(input$$.value, pokemons);
//     });
// };


const searchPokemon = (filtro, pokemons) => {
    let filteredPokemons = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(filtro.toLowerCase()) ||
        pokemon.series.toLowerCase().includes(filtro.toLowerCase())
    );
    drawPokemons(filteredPokemons);
};

const init = async () => {
    const pokemons = await getPokemonApi()
    const mappedPokemons = mapPokemons(pokemons);
    drawPokemon(mappedPokemons);
    drawSearch(mappedPokemons);
};
  
init();