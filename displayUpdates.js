// displayUpdates.js
// Pobieranie aktualności z bazy danych i wyświetlanie na stronie
const updatesList = document.getElementById('updates-list');
const db = firebase.database();

db.ref('updates').on('value', snapshot => {
    updatesList.innerHTML = ''; // Czyścimy listę przed dodaniem aktualizacji
    snapshot.forEach(childSnapshot => {
        const update = childSnapshot.val();
        const key = childSnapshot.key; // Pobieramy klucz aktualizacji
        const updateElement = document.createElement('li');
        updateElement.classList.add('update');
        updateElement.innerHTML = `<p>${update.content}</p>`; // Usuwamy tytuł i wyświetlamy tylko treść
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Usuń';
        removeButton.classList.add('delete-button'); // Dodajemy klasę dla przycisku usuwania
        removeButton.type = 'button';
        removeButton.onclick = () => removeUpdate(key);
        updateElement.appendChild(removeButton);
        updatesList.appendChild(updateElement);
    });
});
