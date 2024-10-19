let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let resultado


function iniciarJuego(){

    let sectionSelectAtack = document.getElementById("seleccionar-ataque")
    sectionSelectAtack.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReinicio = document.getElementById("boton-reinicio")
    botonReinicio.addEventListener("click", reiniciarJuego)
    botonReinicio.style.display = "none"
}
// la funcion "iniciar juego" primero crea la variable "boonMascotaJugador" que es igual a el elemento con la id "boton-mascota"
// luego, agrega un evento al botón que hace que al dar click llame a la funcion "seleccionarMascotaJugador"


function enemigoAtaca(){
    let atack = random(1, 3)

    if (atack == 1){
        ataqueEneFuego()
    } else if (atack == 2){
        ataqueEneAgua()
    } else if (atack == 3){
        ataqueEneTierra()
    }
    commbate()
}

function check(option){
    return document.getElementById((option)).checked
}
// lo que hace document.getElementById((option)).checked es verificar si un input está seleccionado

function spanEdit (idSpan, replace){
    return document.getElementById(idSpan).innerHTML = (replace)
}
// el atributo .innerHTML me permite reemplazar el texto del html siempre y cuando este esté dentro de un span con una id
// el parametro "replace" será la palabra o el texto por el que se reemplazará el original

function crearMensaje(){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", La mascota enemiga atacó con " + ataqueEnemigo + ", " + resultado

    sectionMensajes.appendChild(parrafo)
}
    // "document.crateElement("p") sirve para crear un nuevo elemento en el HTML, y recibe como parametro la etiqueta de lo que se quiere crear,
    // en este caso se usó la etiqueta "p" para crear un parrafo
    // luego, usando ".innerHTML" modificamos ese parrafo

function random(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
} 

function seleccionarMascotaJugador() {

    if (check("Volcanix")){
        alert("ELEGISTE A VOLCANIX")
        spanEdit("mascota-jugador", "Volcanix")
        seleccionarMascotaEnemigo()
    } else if (check("Terracota")){
        alert("ELEGISTE A TERRACOTA")
        spanEdit("mascota-jugador", "Terracota")
        seleccionarMascotaEnemigo()
    } else if (check("Aguamar")){
        alert("ELEGISTE A AGUAMAR")
        spanEdit("mascota-jugador", "Aguamar")
        seleccionarMascotaEnemigo()
    } else if (check("Lavamonte")){
        alert("ELEGISTE A LAVAMONTE")
        spanEdit("mascota-jugador", "Lavamonte")
        seleccionarMascotaEnemigo()
    } else if (check("Vaporiz")){
        alert("ELEGISTE A VAPORIZ")
        spanEdit("mascota-jugador", "Vaporiz")
        seleccionarMascotaEnemigo()
    } else if (check("Lodozal")){
        alert("ELEGISTE A LODOZAL")
        spanEdit("mascota-jugador", "Lodozal")
        seleccionarMascotaEnemigo()
    } else {alert("ELIGE UNA MASCOTA")}

    
}



function seleccionarMascotaEnemigo() {

    let mascEnemigo = random(1, 6)

    if (mascEnemigo == 1){
        alert("ENEMIGO ELIGE A VOLCANIX")
        spanEdit("mascota-enemigo", "Volcanix")
    } else if (mascEnemigo == 2){
        alert("ENEMIGO ELIGE A TERRACOTA")
        spanEdit("mascota-enemigo", "Terracota")
    } else if (mascEnemigo == 3){
        alert("ENEMIGO ELIGE A AGUAMAR")
        spanEdit("mascota-enemigo", "Aguamar")
    } else if (mascEnemigo == 4){
        alert("ENEMIGO ELIGE A LAVAMONTE")
        spanEdit("mascota-enemigo", "Lavamonte")
    } else if (mascEnemigo == 5){
        alert("ENEMIGO ELIGE A VAPORIZ")
        spanEdit("mascota-enemigo", "Vaporiz")
    } else if (mascEnemigo == 6){
        alert("ENEMIGO ELIGE A LODOZAL")
        spanEdit("mascota-enemigo", "Lodozal")
    } 

    let sectionSelectAtack = document.getElementById("seleccionar-ataque")
    sectionSelectAtack.style.display = "block"

    let sectionSelectMascota = document.getElementById("seleccionar-mascota")
    sectionSelectMascota.style.display = "none"
}


//ATAQUES

//ataques del jugador
function ataqueFuego(){
        ataqueJugador = "FUEGO"
        enemigoAtaca()
}
function ataqueAgua(){
        ataqueJugador = "AGUA"
        enemigoAtaca()
}
function ataqueTierra(){
        ataqueJugador = "TIERRA"
        enemigoAtaca()
}

//ataques del enemigo
function ataqueEneFuego(){
    ataqueEnemigo = "FUEGO"
}
function ataqueEneAgua(){
    ataqueEnemigo = "AGUA"
}
function ataqueEneTierra(){
    ataqueEnemigo = "TIERRA"
}

function commbate (){

    if (ataqueEnemigo == ataqueJugador) {
        resultado = "EMPATE"
    } else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
        resultado = "GANASTE🏆"
        vidasEnemigo --
    } else {
        resultado = "PERDISTE"
        vidasJugadowr --   
    }
    spanEdit("vidas-jugador", vidasJugador)
    spanEdit("vidas-enemigo", vidasEnemigo)
    crearMensaje()
    revisarVidas()
}

function revisarVidas(){
    if (vidasJugador == 0){
        alert("EL JUEGO HA TERMINADO, PERDISTE")
    } else if (vidasEnemigo == 0){
        alert("EL JUEGO HA TERMINADO, GANSTE")
    }

    if ((vidasEnemigo == 0) || (vidasJugador == 0)){
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true

        let sectionReinicio = document.getElementById("boton-reinicio")
        sectionReinicio.style.display = "block"
    }
}
    //el atributo .disable desabilita el botón

function reiniciarJuego(){
    location.reload()
}

window.addEventListener("load", iniciarJuego)
//esto lo que hace es llamar a la funcion "iniciarJuego solo despues de cargar toda la pagina" 