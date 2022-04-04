/*
function crearLlaves(nombre,modelo, precio){
    img ="llave.png";
    nombre =`<h2>${nombre}</h2>`;
    modelo =`<h3>${modelo}</h3>`;
    precio = `<p> precio: <b>$${precio}</b></p>`;
    return[nombre,modelo,precio,img];

}
const llave = crearLlaves("Llave1", "modelo x", "33");
document.write(llave[0], llave[1], llave[2])

//en el primer paso de buscar las llaves se crea esto. y en la segunda parte del ejercicio se le agrega el contenedor a todo lo que hemos creado.

const contenedor = document.querySelector(".flex-container");

function crearLlaves(nombre,modelo, precio){
    img ="<img > ";

    nombre =`<h2>${nombre}</h2>`;
    modelo =`<h3>${modelo}</h3>`;
    precio = `<p> precio: <b>$${precio}</b></p>`;

    return[nombre, modelo, precio];

}
const llave = crearLlaves("Llave1", "modelo x", "33");

contenedor.innerHTML += llave[0] + llave[1] + llave[2];
contenedor.innerHTML += llave[0] + llave[1] + llave[2];



const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearLlaves(nombre,modelo, precio){
    contador++;
    // img ="<img src='llave.png'> ";

    nombre =`<h2>${nombre}</h2>`;
    modelo =`<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p> precio: <b>$${precio}</b></p>`;

    return[nombre, modelo, precio];

}

let documentFragment = Document.documentFragment();

for (var i = 0; i < 20; i++ ){
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlaves(`llave ${i}`, `modelo ${modeloRandom}`,`precio ${precioRandom}`);
    let div = document.createElement("div");
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML= llave[0] + llave[1] + llave[2] + llave[2];
    contenedor.innerHTML += div;

}


//no me gusto mucho este ejercicio 

const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearLlaves(nombre,modelo, precio){
    contador++;
    img ="<img src='llave.png'> ";

    nombre =`<h2>${nombre}</h2>`;
    modelo =`<h3 id="${modelo}">${modelo}</h3>`;
    precio = `<p> precio: <b>$${precio}</b></p>`;

    return[img,nombre, modelo, precio];

}

let documentFragment = Document.documentFragment();

for (var i = 0; i < 20; i++ ){
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlaves(`llave ${i}`, `modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("div");
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML= llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);

}

contenedor.appendChild(documentFragment);
*/
//el ejercicio mio no dio pero hay cambios importantes en el para que pueda ser ejecutado 


const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
	img = "<img class='llave-img' src='lave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave;
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);