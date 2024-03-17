// Obsługa dodawania nowej aktualności po submit formularza
const addUpdateForm = document.getElementById('add-update-form');

addUpdateForm.addEventListener('submit', e => {
    e.preventDefault(); // Zapobiegamy domyślnej akcji formularza

    const title = addUpdateForm['title'].value;
    const content = addUpdateForm['content'].value;

    addUpdateToDatabase(title, content);

    addUpdateForm.reset(); // Wyczyść pola formularza po dodaniu aktualności
});

// Dodawanie nowej aktualności do bazy danych
function addUpdateToDatabase(title, content) {
    const updatesRef = firebase.database().ref('updates');

    updatesRef.push({
        title: title,
        content: content
    })
    .then(() => {
        console.log('Nowa aktualizacja została dodana!');
        alert('Nowa aktualizacja została dodana!');
    })
    .catch(error => {
        console.error('Błąd dodawania aktualizacji:', error);
        alert('Błąd dodawania aktualizacji. Spróbuj ponownie.');
    });
}
