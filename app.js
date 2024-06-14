let win = window;
let dom = document;
let body = dom.body
let form = dom.forms
// Nuevas
let divs = dom.querySelectorAll('div')
let div = dom.querySelector('div')
let porIdNuevo = dom.querySelector('#documento')
let porClase = dom.querySelector('.container')
let divsClases = dom.querySelectorAll('.container')
let porId = dom.getElementById('documento')
let atributo = dom.getElementsByName('search')
let oldClass = dom.getElementsByClassName('input')
let liItems = dom.querySelectorAll('ul.list > li.item')

/**
 * Pasar a mayuscula => ¿que es API? <=> ¿QUE ES API?
 */
const api = dom.getElementById('api');
api.innerHTML = "¿QUE ES API?"

console.log(win)
console.log(dom.title)
console.log(dom.doctype);
console.log(dom.head);
console.log(body);
console.log(body.children);
console.log(body.children[2]);
console.log(divs)
console.log(div)
console.log('formularios', form)
console.log('links', dom.links)
console.log('images', dom.images)
console.log('Por Id', porId)
console.log('Por Id Nuevo', porIdNuevo)
console.log('Por clase', porClase)
console.log('Por clases', divsClases)
console.log('Por atributo', atributo)
console.log('Por old class', oldClass)
console.log('ul.list > li.item', liItems)

const listaA = [...body.children]
console.log(listaA)

listaA.map((x) => {
  console.log(x)
})
console.log(api)
console.clear()
const elemento = body.firstElementChild;
console.log(elemento.firstElementChild)
const padre = dom.querySelector('main')
console.log(padre.previousElementSibling.previousElementSibling)
console.clear()
console.log(body.parentElement.previousElementSibling)
