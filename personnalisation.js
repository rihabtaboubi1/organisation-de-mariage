document.getElementById('weddingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    const services = Array.from(document.getElementById('services').selectedOptions).map(option => option.value);
    const budget = document.getElementById('budget').value;

    // Envoyer les données à MongoDB via le backend
    fetch('http://localhost:5000/api/wedding', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: date,
            guests: guests,
            services: services,
            budget: budget
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Votre demande a été enregistrée avec succès !');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
    