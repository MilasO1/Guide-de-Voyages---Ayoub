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

//     const carouselInstance = bootstrap.Carousel.getInstance(carousel);

//     if (event.key === "ArrowLeft") {
//         carouselInstance.prev();
//     } else if (event.key === "ArrowRight") {
//         carouselInstance.next();
//     }
// });

// Ajouter des pointeurs pour chaque ville, avec lien vers la page Destinations
function villesPointeur() {
    const villes = [
        { name: 'Paris', coords: [48.8566, 2.3522], description: 'Découvrez la Tour Eiffel, le Louvre, et bien plus encore !' },
        { name: 'Rome', coords: [41.9028, 12.4964], description: '  Découvrez le Colisée, le Vatican, et bien plus encore ! ' },
        { name: 'Barcelone', coords: [41.3851, 2.1734], description: 'Découvrez la Sagrada Família, le Parc Güell, et bien plus encore !' },
        { name: 'Casablanca', coords: [33.5731, -7.5898], description: ' Admirez la Mosquée Hassan II, la Corniche, et bien plus encore !' },
        { name: 'Dublin', coords: [53.3498, -6.2603], description: 'Explorez le Trinity College, le Guinness Storehouse, et bien plus encore !' },
    ];

    villes.forEach(dest => {
        const marker = L.marker(dest.coords).addTo(map);
        marker.bindPopup(`
            <div class="map-popup">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <a href="destination.html">Lire plus...</a>
            </div>
        `);
    });
}

villesPointeur();


// Validation formulaire classique
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const suggestion = document.getElementById('suggestion').value;
    const message = document.getElementById('formMessage');

    if (name === '' || email === '' || suggestion === '') {
        message.innerHTML = '<div class="alert alert-danger">Tous les champs doivent être remplis.</div>';
        return;
    }

    setTimeout(function() {
        document.getElementById('suggestionForm').reset();

        message.innerHTML = `<div class="alert alert-success">Merci pour votre suggestion, ${name} !</div>`;
    }, 1000); 
}


