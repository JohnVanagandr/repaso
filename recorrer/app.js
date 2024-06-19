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

// Ejercicio

const $padre = dom.getElementById('cards');
// console.log($padre.children)
const nuevo = [...$padre.children];
nuevo.map( (a, i) => {
  if (i % 2 != 0) {
    a.classList.toggle('bg-white')
    let f = a.children
    let y = f[1]
    y = y.children
    let w = [...y]
    w.map((k,l) => {
      if(l==1){
        k.classList.toggle('color-dark')
      }
    })
    
  }
} );

const $formulario = dom.getElementById('search');
const $input = dom.querySelector('.search__form > .input')
$formulario.setAttribute("enctype", "multipart/form-data")
$input.setAttribute("autocomplete", "off")
$input.removeAttribute("placeholder")
$input.setAttribute("placeholder", "señor...")
console.log($input)

// Customon properties CSS
const $html = dom.documentElement;
// console.log($html)
const mineshaft = getComputedStyle($html).getPropertyValue('--mineshaft')
const white = getComputedStyle($html).getPropertyValue('--white')
// console.log(mineshaft, white)
$html.style.setProperty('--mineshaft', '#fff')
$html.style.setProperty('--white', '#000')


const $parrafo = dom.querySelector('#elementos');
// console.log($parrafo)
// $parrafo.textContent = `Parrafo ipsum <b>dolor</b>, sit amet consectetur adipisicing elit. <b>Maiores</b> quidem ducimus </br> soluta perferendis repellendus ex, officiis facilis! Dolore ut corporis maxime facilis perspiciatis aut, veniam officiis veritatis saepe ipsa delectus.`;
$parrafo.in = `Parrafo ipsum <b>dolor</b>, sit amet consectetur adipisicing elit. <b>Maiores</b> quidem ducimus </br> soluta perferendis repellendus ex, officiis facilis! Dolore ut corporis maxime facilis perspiciatis aut, veniam officiis veritatis saepe ipsa delectus.`;