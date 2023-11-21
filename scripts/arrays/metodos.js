
//* Conocer la cantidad de elementos (.length)
const frutas = [
    'Manzanas',
    'Naranjas',
    'Peras',
    'Bananas'
];

const cantidadFrutas = frutas.length;

// console.log(cantidadFrutas);


//* Agregar elementos al final de un array (.push())
// console.log(frutas);

// frutas.push('Kiwis', 'Anana')
// console.log(frutas);

//* Agregar elementos al comienzo de un array (.unshift())
// console.log(frutas);

// frutas.unshift('Kiwis', 'Anana');
// console.log(frutas);

//! Eliminar elemento del final (.pop())

// console.log(frutas);

// const ultimoElemento = frutas.pop();
// console.log(frutas);
// console.log(ultimoElemento);

//! Eliminar el primer elemento (.shift())
// console.log(frutas);

// const primerElemento = frutas.shift();
// console.log(frutas);
// console.log(primerElemento);

//! Eliminar varios elementos (.splice())

// console.log(frutas);

// frutas.splice(0, 3); // Elimina los primeros 3 elementos.
// console.log(frutas);

//* Indentificar indice de un elemento (.indexOf())

// console.log(frutas);

// -1 si no existe
// Numero de indice si existe
// console.log(frutas.indexOf('Kiwis'))

//* Filtrar elementos de un array (.filter())

const precios = [50, 150, 725, 1500, 3750];

function preciosMayoresA800(elemento) {
    return elemento < 800
}

// const preciosFiltrados = precios.filter(function (elemento) {
//     return elemento > 800 && elemento < 2000;
// });

// const preciosFiltrados = precios.filter((elemento) => elemento < 800);

const preciosFiltrados = precios.filter(preciosMayoresA800);
const frutasFiltrados = frutas.filter((fruta) => fruta === 'Bananas');

console.log(preciosFiltrados);
console.log(frutasFiltrados);