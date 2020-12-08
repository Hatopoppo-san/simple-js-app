// List of pokemons, height and type
let pokemonRepository = (function(){
  let pokedex = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  // to get all pokemons' data as in IIFE you cannot access to "pokedex" directly.
  const getAll = () =>{
    return pokedex;
  }
  // to add pokemons into the list with condition.
  const add = (pokemon) =>{
    if(typeof pokemon ===  "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon
  ){
    return pokedex.push(pokemon);
  }else{
    console.log('Add pokemon with "name", "height", "weight"')
  }
};
/*to show pokemons onclick. this is variable for it.
const showDetails = (pokemon) =>{
  loadDetails(pokemon).then(function(){
    console.log(pokemon);
  });
} */

// add pokedex pokemons to DOM as buttons
const addListItem = (pokemon) => {
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  //added onclick function, now pokemon detail is logged onto console when you click.
  button.addEventListener('click', function(event) {
    showDetails(pokemon);
  });
  button.innerText = pokemon.name;
  button.classList.add('pokemonButton');
  listPokemon.appendChild(button)
  pokemonList.appendChild(listPokemon);

};

function loadList(){
  return fetch(apiUrl).then(function(response){
    return response.json();
  }).then(function (json){
    json.results.forEach(function(item){
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function(e){
    console.error(e);
  })
};

function loadDetails(item){
  let url = item.detailsUrl;
  return fetch(url).then(function(response){
    return response.json();
  }).then(function (details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e){
    console.error(e);
  });
}

//to show pokemons onclick. this is variable for it.
const showDetails = (pokemon) =>{
  loadDetails(pokemon).then(function(){
    console.log(pokemon);
  });
}

return{
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};

})();

/*test if this pokemon is added into the pokedex.(worked)
pokemonRepository.add({
  name: "charmander",
  height: 1.0,
  type: "fire"}); */
  //this is not added to the pokemonList as it's number.
  //pokemonRepository.add(0);


  // Loop of pokemon with height
  /* for (let i = 0; i < pokemonList.length; i++){
  document.write(`<p>${pokemonList[i].name}(height: ${pokemonList[i].height})</p>`);
  if(pokemonList[i].height > 1.0){
  document.write("-Wow, that's big!")
} // if pokemons' height is higher than 1.0, add this comment.
}; */

//loop with foreach to see if it works w/o "if" with addListItem function.
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
