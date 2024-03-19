// addUpdate.js

// Funkcja dodająca aktualizację do bazy danych
function addUpdate() {
    const content = document.getElementById('content').value.trim();

    if (content !== '') {
        const newUpdate = {
            content: content
        };

        // Dodaj aktualizację do bazy danych
        firebase.database().ref('updates').push(newUpdate)
            .then(() => {
                console.log('Aktualizacja dodana pomyślnie!');
                // Czyść pole tekstowe po dodaniu aktualizacji
                document.getElementById('content').value = '';
            })
            .catch(error => {
                console.error('Błąd dodawania aktualizacji:', error);
            });
    }
}

// Obsługa potwierdzania Enterem w polu tekstowym
document.getElementById("content").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Zapobiegaj domyślnej akcji (np. nowa linia w textarea)
        addUpdate(); // Dodaj aktualizację
    }
});
