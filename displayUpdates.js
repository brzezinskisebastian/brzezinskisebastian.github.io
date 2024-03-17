// displayUpdates.js
// Pobieranie aktualności z bazy danych i wyświetlanie na stronie
const updatesList = document.getElementById('updates-list');
const db = firebase.database();

db.ref('updates').on('value', snapshot => {
    updatesList.innerHTML = ''; // Czyścimy listę przed dodaniem aktualizacji
    snapshot.forEach(childSnapshot => {
        const update = childSnapshot.val();
        const updateElement = document.createElement('li');
        updateElement.classList.add('update');
        updateElement.innerHTML = `<p>${update.content}</p>`; // Usuwamy tytuł i wyświetlamy tylko treść
        updatesList.appendChild(updateElement);
    });
});
