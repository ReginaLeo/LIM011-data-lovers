
import pokemones from './data/pokemon/pokemon.js';

let allCards = '';

//funcion para mostrar todos los pokemones en la galería principal

const displayPokemons = (obj) => {
  for (let i = 0; i < obj.length; i += 1) {
    allCards += ` 
    <div class="list-pokemon">
    <img class='pokemon-img' alt="imagen de pokemon" src="${obj[i].img}"/>
    <div class='text-name'>
    <h2 class='pokemon-name'><strong>${obj[i].name}</strong></h1>
    <h3 class='pokemon-name'>${obj[i].num}</h2>
    <h4 class='pokemon-name'>${obj[i].type.join(' - ')}</h3>
    </div>
  </div>`;
  }
  document.querySelector('#all-pokemon').innerHTML = allCards;
};
//invocando a la función con la data de los pokemones

displayPokemons(pokemones);

//Función para filtrar los pokemones por tipo

const filtroPorTipo = (dataArray, typeString) => {
  const newArray = [];
  for (let i = 0; i < dataArray.length; i += 1) {
    const arrTipos = dataArray[i].type;
    if (arrTipos.indexOf(typeString) !== -1) {
      newArray.push(dataArray[i])
    }
  }
  return newArray;
};
//Función para filtrar los pokemones por debilidad

const filtroPorDebilidad = (dataArray, typeString) => {
  const newArray = [];
  for (let i = 0; i < dataArray.length; i += 1) {
    const arrTipos = dataArray[i].weaknesses;
    if (arrTipos.indexOf(typeString) !== -1) {
      newArray.push(dataArray[i])
    }
  }
  return newArray;
};

//Mostrando los pokemones por tipo 

const selectType = document.querySelector('#ingreso-type')
selectType.addEventListener("change", (event) => {
  allCards = "";
  displayPokemons(filtroPorTipo(pokemones, event.target.value));
});

//Mostrando los pokemones por debilidad

const selectWeaknesses = document.querySelector('#ingreso-weaknesses')
selectWeaknesses.addEventListener("change", (event) => {
  allCards = "";
  displayPokemons(filtroPorDebilidad(pokemones, event.target.value));
});


// //Función para ordenar data por numeros y  en forma ascendente y descendente

// function orderDataId(dataArray, order) {
//   let ordered = [];
//   if (order === 'id-ascendente') {
//     dataArray.sort(function (a, b) {
//       if (a.id > b.id) {
//         return 1;
//       }
//       if (a.id < b.id) {
//         return -1;
//       }
//     });
//   }
//   else if (order === 'id-descendente') {
//     dataArray.sort(function (a, b) {
//       if (a.id > b.id) {
//         return 1;
//       }
//       else if (a.id < b.id) {
//         return -1;
//       }
//     }).reverse();
//   }
//   return ordered;
// };

//Función para ordenar data alfabeticamente y en forma ascendente y descendente

// function orderDataName(dataArray, order) {
//   let ordered = [];
//   if (order == 'name-ascendente') {
//     dataArray.sort(function (a, b) {
//       if (a.name > b.name) {
//         return 1;
//       }
//       if (a.name < b.name) {
//         return -1;
//       }
//     })
//   };
//   else if (order === 'name-descendente') {
//     dataArray.sort(function (a, b) {
//       if (a.name > b.name) {
//         return 1;
//       }
//       if (a.name < b.name) {
//         return -1;
//       }
//       return 0;
//     }).reverse();
//   }
//   return ordered;
// };


//Función para ordenar array delos pokemones por orden alfabètico A-Z

const arrayAscendetAlphabet = pokemones.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }});


//Función para ordenar array de los pokemones por orden alfabètico Z-A


const arrayDescendetAlphabet = pokemones.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}).reverse();

// // //Función para ordenar array de los pokemones por orden numérico 151-1
// const arrayDescendenteNumber = pokemones.sort(function (a, b) {
//   if (a.id > b.id) {
//     return 1;
//   }
//   if (a.id < b.id) {
//     return -1;
//   }
//   return 0;
// }).reverse();

// //Filtro para elegir el orden de los pokemones

function filtroPorOrden(typeString) {
  if (typeString === "id-ascendente") {
    displayPokemons(pokemones);
  } else if (typeString === "id-descendente") {
    displayPokemons(pokemones);
  } else if (typeString === "name-ascendente") {
    displayPokemons(arrayAscendetAlphabet);
  } else if (typeString === "name-descendente") {
    displayPokemons(pokemones);
  }
}

//DOM para seleccionar los tipos de orden para los pokemones

const selectOrder = document.querySelector('#tipos-orden');
selectOrder.addEventListener("change", (event) => {
  allCards = "";
  filtroPorOrden(event.target.value);
  // orderDataName(pokemones, event.target.value);
});