// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-app-18435.firebaseapp.com",
  projectId: "estate-app-18435",
  storageBucket: "estate-app-18435.firebasestorage.app",
  messagingSenderId: "1010717060389",
  appId: "1:1010717060389:web:6a21a21b27dc9c61c7fecc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);