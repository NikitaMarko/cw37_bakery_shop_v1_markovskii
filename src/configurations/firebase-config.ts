// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNEaVK7kBgSyCe3Jku6zv35a0hpSPiLBM",
    authDomain: "bakery-shop-project.firebaseapp.com",
    projectId: "bakery-shop-project",
    storageBucket: "bakery-shop-project.firebasestorage.app",
    messagingSenderId: "417544638969",
    appId: "1:417544638969:web:99394baf4f4978f90b2d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)