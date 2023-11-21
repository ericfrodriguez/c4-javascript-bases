//* Formas de declarar un array

//* Notacion de corchetes. MAS UTILIZADA
let miArray = ['Manzana', 'Naranja', 'Pera'];
console.log(miArray);

//* Crear una instancia con el operador new.
//* Usamos la funcion constructora de Array
let miArray2 = new Array(1, 2, 3, 4, 5);
console.log(miArray2);

//* Con notacion de corchetes creamos un array vacio.
//* Luego insertamos elementos.
let miArray3 = [];
miArray3.push('Manzana');
miArray3.push('Bananas');
console.log(miArray3);

//* Crear un array con el constructor.
//* Definimos la longitud de elementos vacios y los asignamos.
const miArray4 = new Array(5);
miArray4[0] = 1;
console.log(miArray4);