// addUpdate.js
function addUpdate() {
    const content = document.getElementById('content').value;

    const newUpdate = {
        content: content
    };

    firebase.database().ref('updates').push(newUpdate)
        .then(() => {
            document.getElementById('content').value = '';
        })
        .catch(error => console.error(error));
} 
    function createUpdateElement(update, key) {
    const updateElement = document.createElement('li');
    updateElement.classList.add('update');
    updateElement.innerHTML = `
        <p>${update.content}</p>
        <button type="button" onclick="removeUpdate('${key}')">Usuń</button>
    `;
    return updateElement;
}