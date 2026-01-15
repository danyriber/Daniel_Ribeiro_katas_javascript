/*2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here*/

const nuevoDiv = document.createElement('div');
const contenedor = document.body;
contenedor.appendChild(nuevoDiv);

const nuevoP = document.createElement('p');
const parrafo = document.body;
parrafo.appendChild(nuevoP);

const nuevoP2 = document.createElement('p');
nuevoP2.textContent = "Soy dinámico!";
const parrafo2 = document.body;
parrafo2.appendChild(nuevoP2);

const h2 = document.querySelector('.fn-insert-here');
h2.textContent = "Wubba Lubba dub dub";

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
    apps.forEach(app => {
    const item = document.createElement('li');
    item.textContent = app;
    lista.appendChild(item);
});

const elementos = document.querySelectorAll('.fn-remove-me');
    elementos.forEach(elemento => {
  elemento.remove();

});


const nuevaP = document.createElement('p');
nuevaP.textContent = "Voy en medio!";
const divs = document.querySelectorAll('div');
divs[1].before(nuevaP);

const divs2 = document.querySelectorAll('.fn-insert-here');
  divs2.forEach(div => {
    const p = document.createElement('p');
    p.textContent = "Voy dentro!";
    div.appendChild(p);
  })
    

