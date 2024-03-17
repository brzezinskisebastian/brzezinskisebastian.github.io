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