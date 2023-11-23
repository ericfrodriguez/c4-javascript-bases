//* Propiedades y metodos. Basico

const auto = {
    color: 'Rojo',
    marca: 'Toyota',
    modelo: 'Prius'
}

const avion = {
    cantidadDeAsientos: 10
}

const carritoDeCompra = {
    cantidad: 5,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos: function () { // Metodo
        console.log('Se agregaron 5 productos.');
    },
    eliminarProductos: function () { // Metodo
        console.log('Se eliminaron 2 productos.');
    },
}

const usuario = {
    nombre: 'Eric',
    edad: 24,
    // saludar: ,
    // caminar: ,
}

//* Objeto this
// this hace referencia al objeto en el que se usa.

// this === carrito
const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos: function () { // Metodo
        console.log('Se agregaron 5 productos.');
    },
    eliminarProductos: function () { // Metodo
        console.log('Se eliminaron 2 productos.');
    },
    obtenerCantidadProductos: function() {
        console.log('Cantidad de productos: ' + this.cantidad);
    }
}

// this === persona
// const persona = {
//     nombre: 'Eric',
//     edad: 24,
// }

//* Declaracion usando Object()

// Se crea como un objeto vacio
const persona = new Object();

// Agregamos propiedades
persona.nombre = 'Eric';
persona.edad = 24;

// console.log(persona);

//* Acceder a propiedades

// console.log(carrito.productos);
// console.log(carrito.cantidad);
// console.log(carrito['obtenerCantidadProductos']());

//* Eliminar propiedades

console.log(carrito);

delete carrito.cantidad;
delete carrito['productos'];

// carrito.productos = carrito.productos.filter(() => condicion)