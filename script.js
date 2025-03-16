document.addEventListener('DOMContentLoaded', function() {
    const subjectSelect = document.getElementById('subject');
    const dodatkowe = document.getElementById('dodatkowe');
    const form = document.getElementById('form');
    const sukces = document.getElementById('sukces');

    subjectSelect.addEventListener('change', function() {
        dodatkowe.innerHTML = ''; // Reset dodatkowe pola

        if (this.value === 'wsparcie') {
            dodatkowe.innerHTML = `
                <label for="problemDescription">Opis problemu:</label>
                <input id="problemDescription" name="problemDescription" required></input>
            `;
        } else if (this.value === 'opinie') {
            dodatkowe.innerHTML = `
                <label for="rating">Ocena (1-5):</label>
                <input type="number" id="rating" name="rating" min="1" max="5" required>
            `;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Zatrzymaj domyślne wysłanie formularza

        // Walidacja formularza
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = subjectSelect.value;
        let isValid = true;

        if (!name || !email || !subject) {
            alert('Proszę uzupełnić wszystkie wymagane pola.');
            isValid = false;
        }

        if (subject === 'opinie') {
            const rating = document.getElementById('rating').value;
            if (rating < 1 || rating > 5) {
                alert('Ocena musi być w zakresie 1-5.');
                isValid = false;
            }
        }

        if (isValid) {
            // Tutaj można dodać kod do wysyłania formularza
            sukces.style.display = 'block';
            form.reset(); // Resetuj formularz
            dodatkowe.innerHTML = ''; // Resetuj dodatkowe pola
        }
    });
});