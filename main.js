
/* carrusel funcionamiento si dios quiere */

const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;
let velocidad = 1;
//como sacar el scroll maximo para hacer despues que el scroll vuelva
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
//scroll width 
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + velocidad;
        if (carrusel.scrollLeft === maxScrollLeft) {
            velocidad = velocidad * -1;
        } else if (carrusel.scrollLeft === 0) {
            velocidad = velocidad * -1;
        }
    }, 10 )
};

const stop = () => {
    clearInterval(intervalo);
};

//hacer un evento que cuando paso el mouse se agrande la imagen, se usa mouseover y mouseout
carrusel.addEventListener("mouseover", () => {
    stop();
})
carrusel.addEventListener("mouseout", () => {
    start();
})




start();


