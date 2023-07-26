//menu Lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){//Si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//oculto el menu una vez que se selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una Habilidad particular Identificada con su Id
function crearBarra(id_barra)
for(i = 0; i <= 16; i++){
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
}
//Selecciono todas las barras generales para luego maniputarllas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let 
