// Script de base pour les interactions
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page d'accueil chargée");
});

document.getElementById('weddingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    const services = Array.from(document.getElementById('services').selectedOptions).map(option => option.value);
    const budget = document.getElementById('budget').value;

    if (date && guests && services.length && budget) {
        alert('Merci, votre devis sera envoyé sous peu.');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

