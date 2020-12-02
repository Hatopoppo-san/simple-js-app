// List of pokemons, height and type
let pokemonRepository = (function(){
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

   return{
     getAll: function(){
       return pokemonList;
     },
     add: function(pokemon){
       if(typeof pokemon ===  "object" && pokemon === Object.keys(pokemon)){
       return pokemonList.push(pokemon);
      }
    }
  }
})();



//after adding the condition(45), this works
pokemonRepository.add({
  name: "charmander",
  height: 1.0,
  type: "fire"});
//this is not added to the pokemonList as it's number.
pokemonRepository.add(0);

//it shows pokemonRepository.getAll works.
console.log(pokemonRepository.getAll())
// Loop of pokemon with height
/* for (let i = 0; i < pokemonList.length; i++){
  document.write(`<p>${pokemonList[i].name}(height: ${pokemonList[i].height})</p>`);
if(pokemonList[i].height > 1.0){
  document.write("-Wow, that's big!")
} // if pokemons' height is higher than 1.0, add this comment.
}; */

  // loop with foreach to see if it works w/o if (task 1.5)
  pokemonRepository.getAll().forEach(function(pokemon){
  document.write(`<p>${pokemon.name}, ${pokemon.height}</p>`);
})
