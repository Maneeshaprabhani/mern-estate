// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-aa48d.firebaseapp.com",
  projectId: "mern-estate-aa48d",
  storageBucket: "mern-estate-aa48d.appspot.com",
  messagingSenderId: "1047270912337",
  appId: "1:1047270912337:web:5f1411b95d832669dba370"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);