//* Obtener valores

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');

function mostrarDatos() {
    console.log(nombre.value);
    console.log(email.value);

    // funcion para enviar a un backend
    console.log('Click!');
}


//* Obtener elementos con querySelector()
// Obtiene el primer elemento que coincida
/* 
Etiqueta: div
Clase: .mi-clase
ID: #mi-id
Combinaciones: #mi-id .mi-clase div
*/

const elemento = document.querySelector('div .bg-red');
console.log(elemento);

//* querySelectorAll
// Obtiene todos los elementos que coincidan
const listaDeNodos = document.querySelectorAll('div .bg-red');
console.log(listaDeNodos);

// No todos los metodos de array sirven sobre una NodeList
listaDeNodos.forEach((elemento) => {
    elemento.classList.add('text-xl');
});