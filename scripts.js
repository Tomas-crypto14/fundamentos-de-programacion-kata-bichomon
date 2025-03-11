console.log(document.title);
document.querySelector('.infocard');
document.querySelector("src");
const kanto = document.getElementById("gen1");
const parrafo = document.getElementById("gen-1");
kanto.style.background = "Red";
parrafo.textContent = "Generasión 1 Pokimon";
//Enlace de la pagina
console.log(window./*parent.*/location.href);
//console.log(document.URL);
//Dominio de la pagina
console.log(window./*parent.*/location.hostname);

//Nodos de imagen
//const para = document.getElementsByClassName("infocard");
const node = document.getElementsByClassName("infocard-lg-img");
console.log(node);
//console.log(document.querySelectorAll(".img-fixed.img-sprite"))
const img = document.getElementsByClassName("img-fixed");
//const fly = document.getElementsByClassName(".infocard");
const fly = document.querySelectorAll(".infocard");
//Paa este ejercicio de sustituir el atributo src por imagenes es con for porque tiene
//que hacer un recorrido
for (let i = 0; i < img.length; i++) {
    img[i].src = `https://media.giphy.com/media/2v170e71aanfi/giphy.gif`;
}

/*for (let i = 0; i < fly.length; i++){
    fly[i].style.background = "Blue";
}*/

fly.forEach((pokemon) => {
    if (pokemon.innerHTML.includes("Flying")){
        pokemon.style.background = "Blue";
    }
})
