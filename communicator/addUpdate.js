// addUpdate.js

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

// Funkcja tworząca nową aktualizację w HTML
function createUpdateElement(content) {
    const updateContainer = document.createElement('li');
    updateContainer.classList.add('update');

    const textContainer = document.createElement('div');
    textContainer.classList.add('update-content');
    textContainer.textContent = content;

    const deleteContainer = document.createElement('div');
    deleteContainer.classList.add('delete-container');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Usuń';
    deleteButton.onclick = function() {
        // Dodaj tutaj obsługę usuwania aktualizacji z bazy danych, jeśli jest potrzebna
        // Po usunięciu z bazy danych, usuń również updateContainer
        updateContainer.remove();
    };

    deleteContainer.appendChild(deleteButton);
    updateContainer.appendChild(textContainer);
    updateContainer.appendChild(deleteContainer);

    document.getElementById('updates-list').appendChild(updateContainer);
}
