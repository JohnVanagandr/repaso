import { datos } from "./datos.js";
// identificamos el elemento por la clase
const $padre = document.querySelector('.container');
console.log($padre)
// Creamos un elemento
const nodo = document.createElement('p')
const texto = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat distinctio laboriosam beatae harum voluptate itaque aliquam deserunt necessitatibus nisi."
nodo.innerText = texto;
$padre.appendChild(nodo)
const $lista = document.querySelector('div.container > div.card > ul.list');
console.log($lista)

datos.map( a => {
    const $item = document.createElement('li')
    $item.innerText = a.name;
    $item.classList.add('item')
    $lista.appendChild($item)
} );