import { db } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('book-form');
    const booksTable = document.getElementById('books-table').getElementsByTagName('tbody')[0];

    // Function to add a book to Firestore
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const audioUrl = document.getElementById('audioUrl').value;
        const bookUrl = document.getElementById('bookUrl').value;
        const duration = parseInt(document.getElementById('duration').value);
        const popularity = parseInt(document.getElementById('popularity').value);
        const rating = parseFloat(document.getElementById('rating').value);

        db.collection('books').add({
            title: title,
            description: description,
            imageUrl: imageUrl,
            audioUrl: audioUrl,
            bookUrl: bookUrl,
            dateAdded: new Date(),
            duration: duration,
            popularity: popularity,
            rating: rating
        }).then(() => {
            alert('Książka została dodana!');
            form.reset();
        }).catch(error => {
            console.error('Błąd dodawania książki: ', error);
            alert('Wystąpił błąd podczas dodawania książki.');
        });
    });

    // Function to fetch and display books
    function fetchBooks() {
        db.collection('books').get().then(snapshot => {
            snapshot.forEach(doc => {
                const book = doc.data();
                const row = booksTable.insertRow();
                row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.description}</td>
                    <td><img src="${book.imageUrl}" alt="${book.title}" style="width:100px;"></td>
                    <td><a href="${book.audioUrl}" target="_blank">Audio</a></td>
                    <td><a href="${book.bookUrl}" target="_blank">Książka</a></td>
                    <td>${book.duration}</td>
                    <td>${book.popularity}</td>
                    <td>${book.rating}</td>
                    <td><button onclick="deleteBook('${doc.id}')">Usuń</button></td>
                `;
            });
        }).catch(error => {
            console.error('Błąd pobierania książek: ', error);
        });
    }

    // Function to delete a book from Firestore
    window.deleteBook = function(bookId) {
        db.collection('books').doc(bookId).delete().then(() => {
            alert('Książka została usunięta!');
            booksTable.innerHTML = ''; // Clear table and re-fetch books
            fetchBooks();
        }).catch(error => {
            console.error('Błąd usuwania książki: ', error);
            alert('Wystąpił błąd podczas usuwania książki.');
        });
    };

    // Initial fetch of books
    fetchBooks();
});
