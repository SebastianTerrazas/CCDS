var boton = document.getElementById("BotonEjemplo");
var padreSection = document.getElementById("window");

boton.addEventListener("click", ventana);

function ventana() {
    var elemento = document.createElement("div");
    elemento.setAttribute("class", "ventana");
    padreSection.appendChild(elemento);
}
