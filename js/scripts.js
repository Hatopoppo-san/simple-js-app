// List of pokemons, height and type
let pokemonRepository = (function () {
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

    function getAll() {
     return pokemonList;
   };

    function add(pokemon) {
     pokemonList.push(pokemon)
   };

   return {
     getAll: getAll,
     add: add
  };
})();

// Loop of pokemon with height
/*for (let i = 0; i < pokemonList.length; i++){
  document.write(`<p>${pokemonList[i].name}(height: ${pokemonList[i].height})</p>`);
if(pokemonList[i].height > 1.0){
  document.write("-Wow, that's big!")
} // if pokemons' height is higher than 1.0, add this comment.
}; */

//loop with foreach to see if it works w/o if (task 1.5)

/*This doesn't work :
  function myLoopFunction(getAll){
  write.document(`${pokemonRepository.getAll}`);
 }
 pokemonRepository.getAll.forEach(myLoopFunction);


  This doesn't work either :
  pokemonRepository.forEach(function(pokemonRepository.getAll){
  document.write(`<p>${pokemonRepository.getAll}</p>`);
}); */
