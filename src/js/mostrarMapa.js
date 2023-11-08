(function() {
    const lat = document.querySelector('#lat').textContent
    const lng = document.querySelector('#lng').textContent
    const titulo = document.querySelector('#titulo').textContent
    const mapa = L.map('mapa').setView([lat, lng], 16)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Agregar el pin
    L.marker([lat, lng])
        .addTo(mapa)
        .bindPopup(titulo)
    
})()