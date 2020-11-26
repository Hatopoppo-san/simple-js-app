// List of pokemons, height and type
let pokemonList = [
{
  name: "Bulbasaur",
  height: 0.7,
  type: ["glass", "poison"]
},

{
  name: "Charizard",
  height: 0.6,
  type: "fire"
},

{
  name: "Squirtle",
  height: 0.5,
  type: "water"
},

{
  name: "Caterpie",
  height: 0.3,
  type: "bug"
},

{
  name: "Blastoise",
  height: 1.6,
  type: "water"
},

{
  name: "Weedle",
  height: 0.3,
  type: ["bug", "poison"]
}
];

// Loop of pokemon with height
for (let i = 0; i < pokemonList.length; i++){
  document.write(`${pokemonList[i].name}(height: ${pokemonList[i].height})`);
if(pokemonList[i].height > 1.0){
  document.write("-Wow, that's big!")
} // if pokemons' height is higher than 1.0, add this comment.
};
