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

// Dodawanie nowej aktualizacji
function addUpdate() {
    const content = document.getElementById('content').value.trim();

    if (content !== '') {
        const newUpdate = {
            content: content
        };

        firebase.database().ref('updates').push(newUpdate)
            .then(() => {
                console.log('Aktualizacja dodana pomyślnie!');
                document.getElementById('content').value = ''; // Czyść pole tekstowe po dodaniu aktualizacji
            })
            .catch(error => {
                console.error('Błąd dodawania aktualizacji:', error);
            });
    }
}

document.getElementById("content").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        addUpdate();
    }
});

// Funkcja usuwająca aktualizację
function removeUpdate(key) {
    // Usuwanie aktualizacji o podanym kluczu z bazy danych
    firebase.database().ref(`updates/${key}`).remove()
        .then(() => console.log(`Aktualizacja o kluczu ${key} została usunięta.`))
        .catch(error => console.error(error));
}

// Tworzenie elementu aktualizacji w HTML
function createUpdateElement(update, key) {
    const updateElement = document.createElement('li');
    updateElement.classList.add('update');
    updateElement.innerHTML = `
        <p>${update.content}</p>
        <button type="button" onclick="removeUpdate('${key}')">Usuń</button>
    `;
    return updateElement;
}

// Pobieranie aktualności z bazy danych i wyświetlanie na stronie
const updatesList = document.getElementById('updates-list');
const db = firebase.database();

db.ref('updates').on('value', snapshot => {
    updatesList.innerHTML = ''; // Czyścimy listę przed dodaniem aktualizacji
    snapshot.forEach(childSnapshot => {
        const update = childSnapshot.val();
        const key = childSnapshot.key; // Pobieramy klucz aktualizacji
        const updateElement = createUpdateElement(update, key);
        updatesList.appendChild(updateElement);
    });
});
