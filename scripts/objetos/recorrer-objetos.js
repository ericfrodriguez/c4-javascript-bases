
const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos() { // Metodo
        console.log('Se agregaron 5 productos.');
    },
    eliminarProductos() { // Metodo
        console.log('Se eliminaron 2 productos.');
    },
    obtenerCantidadProductos() {
        console.log('Cantidad de productos: ' + this.cantidad);
    }
}

const persona = {
    nombre: 'Eric',
    edad: 24
}

for (let propiedad in persona) {
    console.log(`${propiedad} : ${persona[propiedad]}`);
}