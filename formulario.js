//formulario funcional

//primero linkea el action y method en html

/* var form = document.getElementById("fform");
//para usar this

form.addEventListener("submit", handleSubmit);
async function handleSubmit(e) {
    e.preventDefault()
    //previene el comportamiento por default del submit
    var data = new FormData(form);
    var response = await fetch(e.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept' : 'application/json'
        }
    })
}
if (response.ok) {
    e.target.reset ()
    alert("Gracias por enviarnos tu mensaje")
};

 */

var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit)  
    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      var response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      })
      if (response.ok) {
        console.log("Listo el pollo, POR FIN")
        event.target.reset ()
        alert("Listo, mensaje enviado")
    }
      
    }

