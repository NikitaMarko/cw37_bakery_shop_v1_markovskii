// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC51xNpvxzLA-Xi46Deq0Ax7LDoDUgS3B4",
    authDomain: "java-27-30-bakery-shop.firebaseapp.com",
    projectId: "java-27-30-bakery-shop",
    storageBucket: "java-27-30-bakery-shop.firebasestorage.app",
    messagingSenderId: "212677054856",
    appId: "1:212677054856:web:e78257856ffebf63c9aa3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)