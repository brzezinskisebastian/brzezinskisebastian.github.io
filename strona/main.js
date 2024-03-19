// Firebase konfiguracja
const firebaseConfig = {
    apiKey: "AIzaSyApg246OwWYfdvW2Q7WakOxKCJuno3xVpA",
    authDomain: "updates-194ca.firebaseapp.com",
    databaseURL: "https://updates-194ca-default-rtdb.firebaseio.com",
    projectId: "updates-194ca",
    storageBucket: "updates-194ca.appspot.com",
    messagingSenderId: "1003036483034",
    appId: "1:1003036483034:web:4a7a2df9431817150db4e3"
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);

// Funkcja logowania użytkownika
function loginUser() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Zalogowano użytkownika pomyślnie
            console.log("Pomyślnie zalogowano użytkownika:", userCredential.user.uid);
            alert("Pomyślnie zalogowano użytkownika.");
            // Tutaj możesz przekierować użytkownika do innej strony lub wykonać inne działania po udanym logowaniu
        })
        .catch((error) => {
            // Wystąpił błąd podczas logowania
            console.error("Błąd logowania użytkownika:", error.message);
            alert("Wystąpił błąd podczas logowania użytkownika: " + error.message);
        });
}

// Funkcja rejestracji użytkownika
function registerUser() {
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Zarejestrowano użytkownika pomyślnie
            console.log("Pomyślnie zarejestrowano użytkownika:", userCredential.user.uid);
            alert("Pomyślnie zarejestrowano użytkownika.");
            // Tutaj możesz przekierować użytkownika do innej strony lub wykonać inne działania po udanej rejestracji
        })
        .catch((error) => {
            // Wystąpił błąd podczas rejestracji
            console.error("Błąd rejestracji użytkownika:", error.message);
            alert("Wystąpił błąd podczas rejestracji użytkownika: " + error.message);
        });
}
