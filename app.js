// Inicializa una variable booleana para rastrear si el menú está visible o no.
var menu_visible = false;

// Obtiene una referencia al elemento del menú lateral en el DOM.
let menu = document.getElementById("nav");

// Función para mostrar u ocultar el menú.
function mostrarOcultarMenu() {
  // Si el menú está oculto...
if (menu_visible == false) {
    // Muestra el menú.
    menu.style.display = "block";
    // Actualiza la variable para indicar que el menú está visible.
    menu_visible = true;
} else {
    // Si el menú está visible...
    // Oculta el menú.
    menu.style.display = "none";
    // Actualiza la variable para indicar que el menú está oculto.
    menu_visible = false;
}
}

// Obtiene una referencia a todos los enlaces dentro del menú.
let links = document.querySelectorAll("nav a");

// Agrega un controlador de eventos a cada enlace.
for (var x = 0; x < links.length; x++) {
links[x].onclick = function () {
    // Cuando se hace clic en un enlace, oculta el menú.
    menu.style.display = "none";
    // Actualiza la variable para indicar que el menú está oculto.
    menu_visible = false;
};
}
