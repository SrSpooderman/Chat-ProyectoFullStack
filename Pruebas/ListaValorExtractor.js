var lista = document.getElementById("miLista");
var elementosLi = lista.getElementsByTagName("li");

// Agregar evento de clic a cada elemento <li>
for (var i = 0; i < elementosLi.length; i++) {
    elementosLi[i].addEventListener("click", function() {
        var valor = this.getAttribute("data-valor");
        console.log(valor); // Imprimir el valor en la consola
    });
}