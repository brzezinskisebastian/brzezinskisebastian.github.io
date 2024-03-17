// functions.js

function removeUpdate(key) {
    // Usuwanie aktualizacji o podanym kluczu z bazy danych
    firebase.database().ref(`updates/${key}`).remove()
        .then(() => console.log(`Aktualizacja o kluczu ${key} została usunięta.`))
        .catch(error => console.error(error));
}

function createUpdateElement(update, key) {
    // Tworzenie elementu aktualizacji
    const updateElement = document.createElement('li');
    updateElement.classList.add('update');
    updateElement.innerHTML = `
        <p>${update.content}</p>
        <button type="button" onclick="removeUpdate('${key}')">Usuń</button>
    `;
    return updateElement;
}
