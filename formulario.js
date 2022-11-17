//formulario funcional



var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit)  
    async function handleSubmit(e) {
      e.preventDefault();
      var formulario = new FormData(e.target);
      var response = await fetch(e.target.action, {
        method: form.method,
        body: formulario,
        headers: {
            'Accept': 'application/json'
        }
      })
      if (response.ok) {
        console.log("Listo el pollo, POR FIN")
        e.target.reset ()
        alert("Listo, mensaje enviado")
    }
      
    }

