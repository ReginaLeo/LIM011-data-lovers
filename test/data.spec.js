
// importamos la función de Filtro por nombre
import {
  filtrarPorNombre,
//    filtroPorTipo, filtroPorDebilidad, orderDataName, filtrarxid,
} from '../src/data.js';


// Testeando la función para filtrar por nombre
const input1 = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // input
const input2 = 'Bulbasaur';
const output = [{ id: 1, num: '001', name: 'Bulbasaur' }]; // yo espero
describe('test de la función filtrarPorNombre', () => {
  it('Test Unitario: filtrarPorNombre debería ser una función', () => {
    expect(typeof filtrarPorNombre).toBe('function');
  });
  it('Test Unitario: deberia retornar un array con todos los objetos cuya propiedad name sea igual a Bulbasaur ', () => {
    expect(filtrarPorNombre(input1, input2)).toEqual(output);
  });
});
