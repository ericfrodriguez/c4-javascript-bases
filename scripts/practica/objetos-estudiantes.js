
const listaEstudiantes = [
    {
        nombre: 'Mauro',
        edad: 43,
        curso: 'C4',
        calificaciones: [8, 9, 7],
    },
    {
        nombre: 'Nahuel',
        edad: 20,
        curso: 'C4',
        calificaciones: [2, 5, 7],
    },
    {
        nombre: 'Vilma',
        edad: 25,
        curso: 'C4',
        calificaciones: [9, 5, 6],
    },
];

// Calificaciones es un array de numeros. number[]
function calcularPromedio(calificaciones) {
    
    let suma = 0;

    for(let indice = 0; indice < calificaciones.length; indice++) {
        suma += calificaciones[indice]; // suma = suma + calificaciones[indice];
    }

    return suma / calificaciones.length;
}

listaEstudiantes.forEach((estudiante) => {
    estudiante.promedio = calcularPromedio(estudiante.calificaciones);
    console.log(estudiante);
});

