
import pokemones from './data/pokemon/pokemon.js';
import {
  arrayToString, filterByType, filterByWeak, orderDataName, filterByName,
} from './data.js';

let allCards = '';

// funcion para mostrar todos los pokemones en la galería principal

const displayPokemons = (obj) => {
  for (let i = 0; i < obj.length; i += 1) {
    allCards
    += `<div align='center'>
  
    <div class='container'>
        <div class= 'card'>
          <img class='image' alt="imagen de pokemon" src="${obj[i].img}"/>
          <h2 class='description'><strong>${obj[i].name}</strong></h1>
          <h3 class='description'>${obj[i].num}</h3>
          <h3 class='box-type'>${arrayToString(obj)[i]}</h3>
        </div>
        <div class='overlay overlayLeft'>
           <div class='text'>
             <p class="title">Debilidades:</p>
             <p>${obj[i].weaknesses}</p>
             <p class="title">Huevos:</p>
             <p>${obj[i].egg}</p>
             <p class="title">Caramelos:</p>
             <p>${obj[i].candy}</p>
           </div>
        </div>
    </div>
   
    </div>`;
  }
  document.querySelector('#all-pokemon').innerHTML = allCards;
};

// invocando a la función con la data de los pokemones

// displayPokemons(pokemones);

// Mostrando los pokemones por tipo

const selectType = document.querySelector('#ingreso-type');
selectType.addEventListener('change', (event) => {
  allCards = '';
  displayPokemons(filterByType(pokemones, event.target.value));
});

// Mostrando los pokemones por debilidad

const selectWeaknesses = document.querySelector('#ingreso-weaknesses');
selectWeaknesses.addEventListener('change', (event) => {
  allCards = '';
  displayPokemons(filterByWeak(pokemones, event.target.value));
});

// DOM para seleccionar los tipos de orden para los pokemones

const selectOrder = document.getElementById('tipos-orden');

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
// Para mostrar HOME

document.getElementById('div_combos').style.display = 'none';

document.getElementById('btn_principal').addEventListener('click', () => {
  document.getElementById('div_combos').style.display = 'block';
  document.getElementById('image_head').style.display = 'none';
  document.getElementById('btn_principal').style.display = 'none';
  displayPokemons(pokemones);
});

// Para buscar pokemones por nombre
document.getElementById('btn_buscar').addEventListener('click', () => {
  const filtro = document.getElementById('txtBusqueda').value;
  allCards = ' ';
  displayPokemons(filterByName(pokemones, filtro));
});

document.getElementById('txtBusqueda').addEventListener('input', () => {
  const filtro = document.getElementById('txtBusqueda').event.target.value;
  // allCards = ' ';
  displayPokemons(filterByName(pokemones, filtro));
});

// Para mostrar home

document.getElementById('home').addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});
// Para mostrar tipos y debilidades

document.getElementById('types').addEventListener('click', () => {
  document.getElementById('all-pokemon').innerHTML = '';
  document.getElementById('div_combos').style.display = 'block';
  document.getElementById('image_head').style.display = 'none';
  document.getElementById('btn_principal').style.display = 'none';
  displayPokemons(pokemones);
});


// Practicando uso de createElement, CreateTextNode,appendChild
// // Crear nodo de tipo element
// const paragraph = document.createElement("p");
// // Crear nodo de tipo Text
// const content = document.createTextNode("Hola Mundo!");
// // Añadir el nodo Text como hijo del nodo Element
// paragraph.appendChild(content);
// // Añadir el nodo Element como hijo de la pagina
// document.body.appendChild(paragraph);
