window.onload = function () {
    document.getElementById('contacto').onclick = mostrarInfo
    document.getElementById('botonCarta').onmouseover = addTooltip
    document.getElementById('leavingTonico').onclick = alertLeaving
    document.getElementById('leavingDil').onclick = alertLeaving
}

function mostrarInfo() {
    this.innerHTML = "Telefono de contacto: 964664451 <br/> Email: racocasatere12@gmail.com" 
    this.style.fontWeight = "bold"
    this.style.color="white"
}

function addTooltip() {
    this.addEventListener('mouseenter', function () {
        this.setAttribute('title', 'Descargar la carta')
    })
    this.addEventListener('mouseout', function () {
        this.setAttribute('title', '')
    })
}

function alertLeaving(elEvento) {
    var evento = elEvento
    if(confirm('Vas a salir de la página')) {

    }
    else {
        evento.preventDefault()
    }
}