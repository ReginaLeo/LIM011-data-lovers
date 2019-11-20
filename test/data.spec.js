
// importamos la función de Filtro por nombre
import {
  filtrarxnombre, arrayToString,
//    filtroPorTipo, filtroPorDebilidad, orderDataName, filtrarxid,
} from '../src/data.js';
import pokemones from '../src/data/pokemon/pokemon.js';

// Testeando la función para filtrar por nombre
const input1 = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // input
const input2 = 'Bulbasaur';
const output = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // yo espero
describe('test de la función filtro por nombre', () => {
  it('filtro por nombre debería ser una función', () => {
    expect(typeof filtrarxnombre).toBe('function');
  });
  it('deberia retornar ["Bulbasaur"], para cuando se le pase [{name: "Bulbasaur"}]', () => {
    expect(filtrarxnombre(input1, input2)).toStrictEqual(output);
  });
});

// Testeando la función para transforma de array a string la propiedad tipo
describe('test de la función que transforma de array a string la propiedad tipo', () => {
  it('el array a string debería ser una función', () => {
    expect(typeof arrayToString).toBe('function');
  });
  it('deberia retornar Grass-Poison cuando se le pase pokemones[1]', () => {
    expect(arrayToString((pokemones)[1])).toContain('Grass - Poison');
  });
});
