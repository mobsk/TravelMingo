// Inicializar o mapa
const map = L.map('map').setView([-23.56893009794297, -46.75415179299923], 13); // Coordenadas iniciais e zoom

// Adicionar o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionar um marcador ao mapa
const marker = L.marker([-23.56893009794297, -46.75415179299923]).addTo(map);

// Adicionar uma mensagem popup ao marcador
marker.bindPopup('<b>Hotel Exemplo</b><br>Preço: R$150/noite.').openPopup();
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=5ae2e3f221c38a28845f05b691aca34631b827d5f7058c8fb1a73629', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: '5ae2e3f221c38a28845f05b691aca34631b827d5f7058c8fb1a73629' // Substitua pela sua chave
}).addTo(map);

.then(response => response.json())
.then(data => {
    console.log(data);
    // Exibir os dados dos hotéis no mapa
});

function applyFilters() {
    const stars = document.getElementById('stars').value;
    const maxPrice = document.getElementById('price').value;

    // Filtrar hotéis com base nos critérios
    const filteredHotels = hotels.filter(hotel => {
        const matchesStars = stars === 'any' || hotel.rating === parseInt(stars);
        const matchesPrice = !maxPrice || hotel.price.total <= parseFloat(maxPrice);
        return matchesStars && matchesPrice;
    });

    // Atualizar o mapa com os hotéis filtrados
    clearMarkers();
    addHotelMarkers(map, filteredHotels);
}
const autocomplete = new google.maps.places.Autocomplete(inputElement);
autocomplete.addListener("place_changed", function() {
    const place = autocomplete.getPlace();
    console.log(place.geometry.location); // Latitude e longitude do local escolhido
});
