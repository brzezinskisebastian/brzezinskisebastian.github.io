// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrcgETEOwDI6mJITRjI47dLkrHpI4iGkQ",
    authDomain: "bajki-na-dobranoc-2ac68.firebaseapp.com",
    databaseURL: "https://bajki-na-dobranoc-2ac68-default-rtdb.firebaseio.com",
    projectId: "bajki-na-dobranoc-2ac68",
    storageBucket: "bajki-na-dobranoc-2ac68.appspot.com",
    messagingSenderId: "849467480850",
    appId: "1:849467480850:web:43ddc191e44d3a475df1cb",
    measurementId: "G-6L9EX2RF29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
