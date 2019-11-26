
// importamos la función de Filtro por nombre
import {
  filterByName, filterByType, filterByWeak, filterById, orderDataName, arrayToString,
} from '../src/data.js';
// Testeando la función para convertir array a string
describe('test de la función arrayToString', () => {
  const input = [{ type: ['Grass', 'Poison'] }]; // input
  const output = ['Grass - Poison']; // yo espero
  it('Test Unitario 01 : arrayToString debería ser una función', () => {
    expect(typeof arrayToString).toBe('function');
  });
  it('Test Unitario 02 : deberia retornar un array con los strings de la propiedad type unidos por un guion', () => {
    expect(arrayToString(input)).toEqual(output);
  });
});
// Testeando la función para filtrar por nombre
const input1 = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // input
const input2a = 'Bulbasaur';
const input2b = 'Bu';
const output1 = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // yo espero
describe('test de la función filtrarPorNombre', () => {
  it('Test Unitario 01 : filterByName debería ser una función', () => {
    expect(typeof filterByName).toBe('function');
  });
  it('Test Unitario 02 : deberia retornar un array con todos los objetos cuya propiedad name sea igual a Bulbasaur ', () => {
    expect(filterByName(input1, input2a)).toEqual(output1);
  });
  it('Test Unitario 03 : deberia retornar un array con todos los objetos cuya propiedad name sea igual a Bulbasaur ', () => {
    expect(filterByName(input1, input2b)).toEqual(output1);
  });
});
// Testeando la función para filtrar por id
describe('test de la función filterById', () => {
  const input12 = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // input
  const input22 = 1;
  const output2 = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // yo espero
  it('Test Unitario 01: filterById debería ser una función', () => {
    expect(typeof filterById).toBe('function');
  });
  it('Test Unitario 02: deberia retornar un array con todos los objetos cuya propiedad id sea igual a 1 ', () => {
    expect(filterById(input12, input22)).toEqual(output2);
  });
});
// Testeando la función para filtrar por tipo
describe('test de la función filterByType', () => {
  const input3 = [{
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  }]; // input
  const input4 = 'Grass';
  const input5 = 'Poison';
  const output2 = [{
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  }]; // yo espero
  it('Test Unitario 01: filterByType, debería ser una función', () => {
    expect(typeof filterByType).toBe('function');
  });
  it('Test Unitario 02: deberia retornar un array con todos los objetos cuya propiedad type sea igual a Grass ', () => {
    expect(filterByType(input3, input4)).toEqual(output2);
  });
  it('Test Unitario 03: deberia retornar un array con todos los objetos cuya propiedad type sea igual a Poison ', () => {
    expect(filterByType(input3, input5)).toEqual(output2);
  });
});
// Testeando la función para filtrar por debilidad
describe('test de la función filterByWeak', () => {
  const input3 = [{
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  }]; // input
  const input4 = 'Fire';
  const input5 = 'Ice';
  const output2 = [{
    id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png',
    type: [
      'Grass',
      'Poison',
    ],
    height: '0.71 m',
    weight: '6.9 kg',
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    next_evolution: [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }],
  }]; // yo espero
  it('Test Unitario 01: filterByWeak, debería ser una función', () => {
    expect(typeof filterByWeak).toBe('function');
  });
  it('Test Unitario 02: deberia retornar un array con todos los objetos cuya propiedad weaknesses sea igual a Fire ', () => {
    expect(filterByWeak(input3, input4)).toEqual(output2);
  });
  it('Test Unitario 03: deberia retornar un array con todos los objetos cuya propiedad weaknesses sea igual a Ice ', () => {
    expect(filterByWeak(input3, input5)).toEqual(output2);
  });
});
// Testeando la función para ordenar
describe('test de la función orderDataName', () => {
  const inputData = [{ num: '001', name: 'Bulbasaur' }, { num: '002', name: 'Ivysaur' }, { num: '003', name: 'Venusaur' }];
  const inputKey01 = 'name';
  const inputKey02 = 'number';
  const inputOrd01 = 'ascendente';
  const inputOrd02 = 'descendente';
  const output01 = [{ num: '001', name: 'Bulbasaur' }, { num: '002', name: 'Ivysaur' }, { num: '003', name: 'Venusaur' }];
  const output02 = [{ num: '003', name: 'Venusaur' }, { num: '002', name: 'Ivysaur' }, { num: '001', name: 'Bulbasaur' }];
  const output012 = [{ num: '001', name: 'Bulbasaur' }, { num: '002', name: 'Ivysaur' }, { num: '003', name: 'Venusaur' }];
  const output022 = [{ num: '003', name: 'Venusaur' }, { num: '002', name: 'Ivysaur' }, { num: '001', name: 'Bulbasaur' }];
  it('Test Unitario 01: orderDataName, debería ser una función', () => {
    expect(typeof orderDataName).toBe('function');
  });
  it('Test Unitario 02: deberia retornar un array con todos los objetos de la propiedad name ordenados ascendente ', () => {
    expect(orderDataName(inputData, inputKey01, inputOrd01)).toEqual(output01);
  });
  it('Test Unitario 03: deberia retornar un array con todos los objetos de la propiedad name ordenados descendente ', () => {
    expect(orderDataName(inputData, inputKey01, inputOrd02)).toEqual(output02);
  });
  it('Test Unitario 04: deberia retornar un array con todos los objetos de la propiedad num ordenados ascendente ', () => {
    expect(orderDataName(inputData, inputKey02, inputOrd01)).toEqual(output012);
  });
  it('Test Unitario 05: deberia retornar un array con todos los objetos de la propiedad num ordenados descendente ', () => {
    expect(orderDataName(inputData, inputKey02, inputOrd02)).toEqual(output022);
  });
});
