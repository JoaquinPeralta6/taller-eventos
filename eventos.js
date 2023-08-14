var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");

boton.addEventListener("click", function(event) {
  event.stopPropagation(); // Detiene la propagación del evento
});

contenedor.addEventListener("click", function() {
    alert("Hola! Soy el div");
});