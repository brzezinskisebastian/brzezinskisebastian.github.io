// addUpdate.js
function addUpdate() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newUpdate = {
        title: title,
        content: content
    };

    firebase.database().ref('updates').push(newUpdate)
        .then(() => {
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
        })
        .catch(error => console.error(error));
}