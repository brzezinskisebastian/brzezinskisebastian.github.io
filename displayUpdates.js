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
        updateElement.innerHTML = `<h3>${update.title}</h3><p>${update.content}</p>`;
        updatesList.appendChild(updateElement);
    });
});
