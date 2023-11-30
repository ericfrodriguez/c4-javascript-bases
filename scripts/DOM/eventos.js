const boton = document.querySelector('#mi-boton');
const boton2 = document.querySelector('#mi-boton2');
// console.log(boton);
// const manejadorClick = () => {
//     console.log('Click!');
// }

// boton.addEventListener(tipoEvento, manejadorEvento);

//* evento click (click)
boton.addEventListener('click', (evento) => {
    console.log(evento.target.id);
    // console.log('Click simple!');
});

boton.addEventListener('click', () => {
    console.log('Otra accion!');
});
// boton.onclick = () => {
//     console.log('Click!');
// }

// boton.onclick = () => {
//     console.log('Otra accion!');
// }

//* evento doble click (dblclick)

boton2.addEventListener('dblclick', (evento) => {
    console.log('Doble click!!');
    console.log(evento.target.id);
});

//* eventos del mouse

const contenedorMouse = document.getElementById('mouse-events');

// contenedorMouse.addEventListener('mousemove', (evento) => {
//     console.log('X: ', evento.x);
//     console.log('Y: ', evento.y);
// });

contenedorMouse.addEventListener('mousedown', () => {
    contenedorMouse.classList.remove('bg-red');
    contenedorMouse.classList.add('bg-blue');
    contenedorMouse.innerText = 'Mantenemos el click';
});

contenedorMouse.addEventListener('mouseup', () => {
    contenedorMouse.classList.remove('bg-blue');
    contenedorMouse.classList.add('bg-red');
    contenedorMouse.innerText = 'Soltamos el click';
});


//* eventos del teclado

const contenedorTeclado = document.getElementById('keyboard-events');

// contenedorTeclado.addEventListener('keydown', () => {
//     console.log('Tecla presionada');
// })

contenedorTeclado.addEventListener('keyup', () => {
    console.log('Suelto la tecla');
})

//* Evento de cambio (change)

const inputCambio = document.getElementById('change-events');

// inputCambio.addEventListener('change', (evento) => {
//     console.log(evento.target.value);
// });

//* Evento de input (input)

// inputCambio.addEventListener('input', (evento) => {
//     console.log(evento.target.value);
// });

//* Evento submit
const form = document.getElementById('form');
const input = document.getElementById('input-search');

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evito que se recargue la pagina
    // console.log(evento.target);
    console.log(input.value);
});