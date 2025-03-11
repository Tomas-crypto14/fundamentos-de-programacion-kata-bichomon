console.log(document.title);
document.querySelector('.infocard');
document.querySelector("src");
document.getElementById("gen1");
gen1.style.background = "Red";
//Enlace de la pagina
console.log(window./*parent.*/location.href);
//Dominio de la pagina
console.log(window./*parent.*/location.hostname);

//Nodos de imagen
const para = document.getElementsByClassName("infocard");
const node = document.getElementsByClassName("infocard-lg-img");
console.log(node);
let img = document.getElementsByClassName("img-fixed");
const fly = document.getElementsByClassName("itype flying");
//Paa este ejercicio de sustituir el atributo src por imagenes es con for porque tiene
//que hacer un recorrido
for (let i = 0; i < img.length; i++) {
    img[i].src = `https://media.giphy.com/media/2v170e71aanfi/giphy.gif`;
}

for ( let i = 0; i < fly.length; i++){
    fly[i].style.background = "Blue";
}

