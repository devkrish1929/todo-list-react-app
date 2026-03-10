// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7cGnp32cxxeE9FV0gt-bD0UA5zmoQSJA",
  authDomain: "todoproject-9f416.firebaseapp.com",
  projectId: "todoproject-9f416",
  storageBucket: "todoproject-9f416.firebasestorage.app",
  messagingSenderId: "559507988905",
  appId: "1:559507988905:web:a951ebb0b3448b9980e4b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);