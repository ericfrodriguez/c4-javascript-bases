
//* Condicional (if - else if - else)
// const edad = 24;

// if (edad >= 18) { // Se ejecuta si es verdadero.

//     console.log('Eres mayor de edad');

// } else if (edad === 17) {

//     console.log('Te falta poco para los 18 años :)');

// } else { // Se ejecuta cuando la condicion es falsa.

//     console.log('Necesitas ser mayor de edad.');

// }

//* Operador ternario (condicion ? verdadero : falso)

// const edad = 16;

// const mensaje = edad >= 18
//     ? 'Eres mayor de edad' // Expresion por verdadero
//     : 'Necesitas ser mayor de edad.'; // Expresion por falso

// console.log(mensaje);

// console.log('Otros procesos...');

//* Switch

const edad = 16;

switch (edad) {
    case 18:
        console.log('Tienes 18 años.');
        break;
    case 17:
        console.log('Te falta 1 año para los 18.');
        break;
    case 16:
        console.log('Te faltan 2 años para los 18.');
        break;

    default:
        console.log('Edad invalida');
        break;
}