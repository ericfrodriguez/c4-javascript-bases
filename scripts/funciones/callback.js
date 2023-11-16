
const saludar = () => {
    let mensaje;

    console.trace(mensaje);
    console.log('Eres mayor de edad.');
}

function miFuncion(callback) {
    const edad = 16;

    if (edad >= 18) {
        callback();
    } else {
        console.error('Eres menor de edad');
    }
}

miFuncion(saludar);

// const resultado = 5 + 8;
// const nombre = 'Eric';

// console.log('Resultado de la suma: ', resultado);
// console.log('Nombre de usuario logueado: ', nombre);

// if(false) {
//     console.log('IF Verdadero');
// }

// miFuncion(() => {
//     console.log('Bienvenidx!');
//     console.log('Eres mayor de edad.');
// });