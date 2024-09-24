// Effet d'apparition progressive des cartes de services lorsqu'elles entrent dans la vue
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Fonction pour ajouter la classe 'show' aux éléments visibles
    const showCardsOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;  // 4/5ème de la hauteur de l'écran

        serviceCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    // Appel initial au chargement de la page et lors du défilement
    showCardsOnScroll();
    window.addEventListener('scroll', showCardsOnScroll);
});

// Animation au survol : carte s'agrandit légèrement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Action au clic sur une carte de service
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Vous avez sélectionné le service: ${card.querySelector('h3').innerText}`);
    });
});
