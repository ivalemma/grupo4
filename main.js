//let edadMinima = 18;
/* let edadUsuario = prompt("Ingrese su edad");

if(edadUsuario >= edadMinima) {
    alert("Podes ingresar a donar");
} else {
    alert("No podes donar")
} */



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



//formulario funcional

//primero linkea el action y method en html

/* const fform = document.querySelector("form");
//para usar this
fform.addEventListener("submit", handleSubmit);

// pareciera que no funciona el preventdefault, no sabemos que onda
async function handleSubmit(event) {
    event.preventDefault();
    
    const formulario = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'Accept' : 'application/json'
        }
    })
}
if (response.ok) {
    this.reset ()
    alert("Gracias por enviarnos tu mensaje")
}
 */
