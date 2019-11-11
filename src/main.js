
import pokemones from './data/pokemon/pokemon.js';

let allCards = '';

// funcion para mostrar todos los pokemones en la galería principal

let displayPokemons = (obj) => {
  for (let i = 0; i < obj.length; i += 1) {
    allCards += 
    `<div align='center'>
    <div>
    <div class='container'>
         <div class= 'card'>
          <img class='image' alt="imagen de pokemon" src="${obj[i].img}"/>
          <h2><strong>${obj[i].name}</strong></h1>
          <h3>${obj[i].num}</h3>
          <h3>${obj[i].type.join(' - ')}</h3>
          </div>
      <div class='overlay overlayLeft'>
         <div class='text'>
         <p><strong>Debilidades:</strong></p>
         <p>${obj[i].weaknesses}</p>
         <p><strong>Huevos:</strong></p>
         <p>${obj[i].egg}</p>
         <p><strong>Caramelos:</strong></p>
         <p>${obj[i].candy}</p>
         </div>
       </div>
       </div>
    </div>
    </div>`;
  }
  document.querySelector('#all-pokemon').innerHTML = allCards;
};
// invocando a la función con la data de los pokemones

displayPokemons(pokemones);

// Función para filtrar los pokemones por tipo

const filtroPorTipo = (dataArray, typeString) => {
  const newArray = [];
  for (let i = 0; i < dataArray.length; i += 1) {
    const arrTipos = dataArray[i].type;
    if (arrTipos.indexOf(typeString) !== -1) {
      newArray.push(dataArray[i]);
    }
  }
  return newArray;
};
// Función para filtrar los pokemones por debilidad

const filtroPorDebilidad = (dataArray, typeString) => {
  const newArray = [];
  for (let i = 0; i < dataArray.length; i += 1) {
    const arrTipos = dataArray[i].weaknesses;
    if (arrTipos.indexOf(typeString) !== -1) {
      newArray.push(dataArray[i]);
    }
  }
  return newArray;
};

// Mostrando los pokemones por tipo

const selectType = document.querySelector('#ingreso-type')
selectType.addEventListener('change', (event) => {
  allCards = '';
  displayPokemons(filtroPorTipo(pokemones, event.target.value));
});

// Mostrando los pokemones por debilidad

const selectWeaknesses = document.querySelector('#ingreso-weaknesses')
selectWeaknesses.addEventListener('change', (event) => {
  allCards = '';
  displayPokemons(filtroPorDebilidad(pokemones, event.target.value));
});


// Función para ordenar data alfabeticamente y en forma ascendente y descendente

const orderDataName = (dataArray, OrderBy, order) => {
  let ordered = [];
  if (OrderBy === 'name') {
    if (order === 'ascendente') {
      ordered = dataArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order == 'descendente') {
      ordered = dataArray.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
    return ordered;
  }
  if (OrderBy === 'number') {
    if (order === 'ascendente') {
      ordered = dataArray.sort((a, b) => a.num.localeCompare(b.num));
    } else if (order === 'descendente') {
      ordered = dataArray.sort((a, b) => a.num.localeCompare(b.num)).reverse();
    }
    return ordered;
  }
};


// DOM para seleccionar los tipos de orden para los pokemones

const selectOrder = document.querySelector('#tipos-orden');

selectOrder.addEventListener('change', () => {
  allCards = ' ';
  const orderValue = document.getElementById('tipos-orden').value;
  if (orderValue === 'name-ascendente') {
    displayPokemons(orderDataName(pokemones, 'name', 'ascendente'));
  } else if (orderValue === 'name-descendente') {
    displayPokemons(orderDataName(pokemones, 'name', 'descendente'));
  } else if (orderValue === 'id-ascendente') {
    displayPokemons(orderDataName(pokemones, 'number', 'ascendente'));
  } else if (orderValue === 'id-descendente') {
    displayPokemons(orderDataName(pokemones, 'number', 'descendente'));
  }
});



