let pokemonList = [
{
  name: "Bulbasaur",
  height: 7,
  type: ["glass", "poison"]
},

{
  name: "Charizard",
  height: 6,
  type: "fire"
},

{
  name: "Squirtle",
  height: 5,
  type: "water"
},

{
  name: "Caterpie",
  height: 3,
  type: "bug"
},

{
  name: "Weedle",
  height: 3,
  type: ["bug", "poison"]
}
];

for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i]);
};
