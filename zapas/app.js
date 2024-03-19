// app.js

// Pobierz referencje do elementów HTML
const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');
const loginForm = document.querySelector('#login-page form');
const createAccountLink = document.querySelector('#login-page a');
const contactList = document.getElementById('contact-list');

// Obsługa zdarzenia kliknięcia przycisku logowania
function loginUser(event) {
    event.preventDefault(); // Zatrzymaj domyślne działanie formularza
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Logika logowania z wykorzystaniem Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Użytkownik zalogowany pomyślnie
            const user = userCredential.user;
            loginPage.classList.add('hidden');
            mainPage.classList.remove('hidden');
            document.getElementById('logged-user').textContent = username;
            // Tutaj można dodać logikę pobierania listy kontaktów
        })
        .catch((error) => {
            // Błąd logowania
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

// Obsługa zdarzenia kliknięcia przycisku "Zaloguj się"
loginForm.addEventListener('submit', loginUser);

// Obsługa zdarzenia kliknięcia linku "Utwórz konto"
createAccountLink.addEventListener('click', function() {
    // Tutaj można dodać przekierowanie do strony rejestracji
    alert('Funkcja "Utwórz konto" nie została jeszcze zaimplementowana.');
});
