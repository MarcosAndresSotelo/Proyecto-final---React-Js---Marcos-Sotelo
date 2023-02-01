// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0YJyWDmF7rfj9AWK9_FUVS11XfVqdRYE",
    authDomain: "proyecto-final---react-js.firebaseapp.com",
    projectId: "proyecto-final---react-js",
    storageBucket: "proyecto-final---react-js.appspot.com",
    messagingSenderId: "833760343547",
    appId: "1:833760343547:web:308c7bd6c915a6f642c75e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
