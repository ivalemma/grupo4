//let edadMinima = 18;
/* let edadUsuario = prompt("Ingrese su edad");

if(edadUsuario >= edadMinima) {
    alert("Podes ingresar a donar");
} else {
    alert("No podes donar")
} */

function validacion(){
    alert("Tus mensaje se envio correctamente")
}

/* carrusel funcionamiento si dios quiere */

const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;
let velocidad = 1;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

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

};

start();

