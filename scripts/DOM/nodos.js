//* createElement, appendChild

const parrafo = document.createElement('p'); // Creo el elemento
parrafo.innerText = 'Este es un nuevo parrafo'; // Agrego contenido

const contenedor = document.getElementById('div-container');
contenedor.appendChild(parrafo);

// console.log(contenedor);
// console.log(parrafo);

//* removeChild
const lorem = document.getElementById('p-lorem');

contenedor.removeChild(lorem);
// contenedor.removeChild(parrafo);

//* remove
const parrafosRojos = document.getElementsByClassName('bg-red');

const primerParrafo = parrafosRojos[0];
primerParrafo.remove();

function generarCard() {
    // createElement('div');
    // createElement('img');
    
}

//* Error de seguridad
// const imput = `<script src="./scripts/DOM/nodos.js">
// alert('codigo malo');
// </script>`

// contenedor.innerHTML = `
// <div id="div-container">
//     <p id="p-lorem" class="bg-red">${input}</p>
// </div>
// `;
