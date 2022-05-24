// funcion reducer
// const reducer = (acumulador, valorActual) => nuevoAcumulador

//const reducido = [].reduce((acc,el) => ac+el,0)
//console.log(reducido);

const numeros = [1,2,3,4,5];
const resultado = numeros.reduce((acc,el) => acc + el, 0);
console.log(resultado);

const mascotas = [
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'},
    { nombre: 'Puchini', edad: 10, tipo: 'perro'},
    { nombre: 'Pulga', edad: 7, tipo: 'gato'},
    { nombre: 'Sasha', edad: 3, tipo: 'perro'}
]

const indexed = mascotas.reduce((acc,el) => ({...acc, [el.nombre]: el}), {})
console.log( indexed);

const anidado = [1, [2,3], 4, [5]];
// [1,2,3,4,5]


const plano = anidado.reduce( (acc,el) => acc.concat(el), []);
console.log(plano);