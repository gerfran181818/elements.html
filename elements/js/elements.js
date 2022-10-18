const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const sectionMensajes = document.getElementById("resultado")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const seccionReiniciar = document.getElementById("reiniciar")

const spanVidasJugador = document.getElementById("vida-jugador")
const spanVidasEnemigo = document.getElementById("vida-enemigo")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const inputKisame = document.getElementById("kisame")
const inputgaara = document.getElementById("gaara")
const inputItachi = document.getElementById("itachi")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const botonMascotaJugador = document.getElementById("boton-seleccionar")
 
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    
    seccionSeleccionarAtaque.style.display = "none"

    seccionReiniciar.style.display = "none"

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
 
    botonFuego.addEventListener("click", ataqueFuego)
    
    botonAgua.addEventListener("click", ataqueAgua)
    
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    seccionSeleccionarMascota.style.display = "none"
  
    seccionSeleccionarAtaque.style.display = "flex"

    if (inputKisame.checked){
        spanMascotaJugador.innerHTML = "Kisame"
    } else if (inputgaara.checked) {
        spanMascotaJugador.innerHTML = "Gaara"
    } else if(inputItachi.checked) {
        spanMascotaJugador.innerHTML = "Itachi"
    } else {
        alert("Selecciona una mascota!")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Kisame"
    }else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Gaara"
    }else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Itachi"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("FELICIDADES! Ganaste :)")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO! Perdiste :(")
    }
}

function crearMensaje(resultado) {
    

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal
 
    botonFuego.disabled = true
    
    botonAgua.disabled = true

    botonTierra.disabled = true
    
    seccionReiniciar.style.display = "block"

}
function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +
 1)
}

window.addEventListener("load", iniciarJuego)
