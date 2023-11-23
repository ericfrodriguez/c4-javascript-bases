const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos: function () { // Metodo
        console.log('Se agregaron 5 productos.');
    },
    eliminarProductos: function () { // Metodo
        console.log('Se eliminaron 2 productos.');
    },
    obtenerCantidadProductos: function () {
        console.log('Cantidad de productos: ' + this.cantidad);
    }
}

// carrito.cantidad
// carrito.productos
// carrito.agregarProductos

// const cantidad = carrito.cantidad;
// const productos = carrito.productos;

const {
    cantidad,
    productos,
    agregarProductos } = carrito;

// console.log(cantidad);
// console.log(productos);
// agregarProductos()

const usuario = {
    nombre: 'Eric',
    apellido: 'Rodriguez',
    edad: 24,
}

const { nombre, edad, apellido } = usuario;

const mensaje = `
Hola, mi nombre es ${nombre} ${apellido}.
Tengo ${edad} años.
`;

console.log(mensaje);