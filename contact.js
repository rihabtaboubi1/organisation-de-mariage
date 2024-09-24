document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Message envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message.');
    }
});
