// console.dir(document);
// console.dir(document.body);
// console.dir(document.head);

//* getElementById()

const parrafo = document.getElementById('text-7');
// console.dir(parrafo);

//* getElementsByTagName
const parrafosPorEtiqueta = document.getElementsByTagName('p');
// console.dir(parrafosPorEtiqueta);

//* getElementsByClassName
const parrafosPorClase = document.getElementsByClassName('bg-red');
// console.dir(parrafosPorClase);

//* innerText
// console.log(parrafo.innerText)
// console.log(parrafosPorEtiqueta[1].innerText);

parrafo.innerText = 'Esta pagina NO es muy sencilla';

//* textContent
// console.log(parrafosPorClase[1].textContent)
// console.log(parrafosPorEtiqueta[2].textContent);
parrafosPorClase[1].textContent = 'Holis';

//* innerHTML
const container = document.getElementById('div-container');

// console.log(container.innerHTML);
container.innerHTML = `
<div>
<h2>Foto de perfil</h2>
<p>Biografia</p>
<img width="150" src="https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/93/aa/93aa8de92702553e21a87ba0b6d53269557b159a.jpg">
</div>
`;
// console.log(container.innerText);


//* className
const miParrafo = document.getElementById('text-7');
console.log(miParrafo.className);

// miParrafo.className = 'bg-blue';

// miParrafo.className += ' text-xl';

//* classList

miParrafo.classList.add('text-xl', 'container');

miParrafo.classList.remove('text-xl');
