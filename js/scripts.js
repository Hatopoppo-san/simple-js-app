// List of pokemons, height and type
let pokemonRepository = (function() {
  let pokedex = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  // to get all pokemons' data as in IIFE you cannot access to "pokedex" directly.
  const getAll = () => {
    return pokedex;
  };
  // to add pokemons into the list with condition.
  const add = pokemon => {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      return pokedex.push(pokemon);
    } else {
      console.log('Add pokemon with "name", "height", "weight"');
    }
  };

  // add pokedex pokemons to DOM as buttons
  const addListItem = pokemon => {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    //added onclick function, now pokemon detail is logged onto console when you click.
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton');
    listPokemon.classList.add('group-list-item')
    $('.pokemonButton').attr('data-toggle', 'modal');
    $('.pokemonButton').attr('data-target', '#pokeModal');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  };

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        pokemon.imgUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  //to show pokemons onclick. this is variable for it.
  const showDetails = pokemon => {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  };

  let showModal = pokemon =>{
   let modalBody = $('.modal-body');
   let modalTitle = $('.modal-title');
   //let modalHeader = $('.modal-header');

   //add in ordre not to open multiple modals
   modalTitle.empty();
   modalBody.empty();

   let nameElement = $(`<h1>${pokemon.name}</h1>`);
   let imageElementFront = $('<img class="modal-img" stlye="width: 50%">');
   imageElementFront.attr('src', pokemon.imgUrl);
   let heightElement = $(`<p> height: ${pokemon.height}</p>`);
   let weightElement = $(`<p> weight: ${pokemon.weight}</p>`);

   modalTitle.append(nameElement);
   modalBody.append(imageElementFront);
   modalBody.append(heightElement);
   modalBody.append(weightElement);

  } ;


  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//loop with foreach to see if it works w/o "if" with addListItem function.
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
