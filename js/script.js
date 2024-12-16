// Initialisation de la carte
const map = L.map('map').setView([43.4927, -1.4747], 10); // Centre par défaut sur Bayonne
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Bouton pour afficher/masquer la carte
document.getElementById('toggleMap').addEventListener('click', () => {
    const mapDiv = document.getElementById('map');
    if (mapDiv.classList.contains('hidden-map')) {
        mapDiv.classList.remove('hidden-map');
        setTimeout(() => {
            map.invalidateSize(); // Redessiner la carte après l'affichage
        }, 300); // Délai pour s'assurer que la carte est visible
    } else {
        mapDiv.classList.add('hidden-map');
    }
});


// Derouler le carousel avec les fléches gauche et droite
document.addEventListener("keydown", function(event) {
    const carousel = document.querySelector("#mainCarousel");
    
    if (event.key === "ArrowLeft") {
        
        carousel.querySelector('[data-bs-slide="prev"]').click();
    } else if (event.key === "ArrowRight") {
        
        carousel.querySelector('[data-bs-slide="next"]').click();
    }
});



// Autre methode en utilisant bootstrap.getInstance

// document.addEventListener("keydown", function(event) {
//     const carousel = document.querySelector("#mainCarousel");
//     if (!carousel) return;

//     const carouselInstance = bootstrap.Carousel.getInstance(carousel);

//     if (event.key === "ArrowLeft") {
//         carouselInstance.prev();
//     } else if (event.key === "ArrowRight") {
//         carouselInstance.next();
//     }
// });