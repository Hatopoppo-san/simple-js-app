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
    item.imgUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e){
    console.error(e);
  });
}

//to show pokemons onclick. this is variable for it.
const showDetails = (item) =>{
  loadDetails(item).then(function(){
    showModal(`${item.name}`, `height: ${item.height}`);
  });
}

//see if modal works
let modalContainer = document.querySelector('#modal-container');
let pokemonImage = document.createElement('img');
pokemonImage.src = item.imgUrl;
modalContainer.appendChild(pokemonImage);

let showModal = (title, text) =>{
  let modal = document.createElement('div');
  modal.classList.add('modal');

  //Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);



  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(closeButtonElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
};

function hideModal(){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible')
}

window.addEventListener('keydown', (e) =>{
  let modalContainer = document.querySelector('#modal-container');
  if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
    hideModal();
  }
});


modalContainer.addEventListener('click' ,(e) =>{
  let target = e.target;
  if(target === modalContainer){
    hideModal()
  }
});

return{
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};

})();

//loop with foreach to see if it works w/o "if" with addListItem function.
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
