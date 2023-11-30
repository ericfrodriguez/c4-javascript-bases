const productos = [
    {
        id: 1,
        nombre: 'Remera S',
        color: 'Rojo',
        cantidad: 5
    },
    {
        id: 2,
        nombre: 'Jeans',
        color: 'Azul',
        cantidad: 30
    },
    {
        id: 3,
        nombre: 'Zapatillas',
        color: 'Negro',
        cantidad: 8
    },
    {
        id: 4,
        nombre: 'Gorras',
        color: 'Blanco',
        cantidad: 9
    },
    {
        id: 5,
        nombre: 'Bandoleras',
        color: 'Blanco',
        cantidad: 9
    },
    {
        id: 6,
        nombre: 'Remera XL',
        color: 'Rojo',
        cantidad: 5
    },
];

const container = document.getElementById('container-productos');

const form = document.getElementById('form');
const input = document.getElementById('input-search');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const productosFiltrados = productos.filter((producto) => producto.nombre.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()));

    renderizarProductos(productosFiltrados);
});


const renderizarProductos = (productos) => {

    // Hacer acumulador con innerHTML

    container.innerHTML = '';

    const contenido = [];

    productos.forEach((producto) => {
        const cardProducto = document.createElement('p');
        cardProducto.innerText = producto.nombre;

        contenido.push(cardProducto);
    });

    container.append(...contenido);
}



