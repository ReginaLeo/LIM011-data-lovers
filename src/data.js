// función de búsqueda por

export const filtrarPorNombre = (data, condition) => {
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].name.toLowerCase().startsWith(condition.toLowerCase())) {
      newArray.push(data[i]);
    }
  }
  return newArray;
};

export const filtrarxid = (data, condition) => {
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].id === parseFloat(condition)) {
      newArray.push(data[i]);
    }
  }
  return newArray;
};


export const arrayToString = (obj) => {
  const newInput = [];
  for (let i = 0; i < obj.length; i += 1) {
    newInput.push(obj[i].type.join(' - '));
  }
  return newInput;
};

// Función para filtrar los pokemones por tipo

export const filtroPorTipo = (dataArray, typeString) => {
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

export const filtroPorDebilidad = (dataArray, typeString) => {
  const newArray = [];
  for (let i = 0; i < dataArray.length; i += 1) {
    const arrTipos = dataArray[i].weaknesses;
    if (arrTipos.indexOf(typeString) !== -1) {
      newArray.push(dataArray[i]);
    }
  }
  return newArray;
};


// Función para ordenar data alfabeticamente y en forma ascendente y descendente

export const orderDataName = (dataArray, OrderBy, order) => {
  let ordered = [];
  if (OrderBy === 'name') {
    if (order === 'ascendente') {
      ordered = dataArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'descendente') {
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
  return ordered;
};
