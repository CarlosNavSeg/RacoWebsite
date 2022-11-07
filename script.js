window.onload = function () {
    document.getElementById('contacto').onclick = mostrarInfo
    document.getElementById('botonCarta').onmouseover = alertarSalida
}

function mostrarInfo() {
    this.innerHTML = "Telefono de contacto: 964664451 <br/> Email: racocasatere12@gmail.com" 
    this.style.fontWeight = "bold"
    this.style.color="white"
}

function alertarSalida() {
    this.addEventListener('mouseenter', function () {
        this.setAttribute('title', 'Descargar la carta')
    })
    this.addEventListener('mouseout', function () {
        this.setAttribute('title', '')
    })
}