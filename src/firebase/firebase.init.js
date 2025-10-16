// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3aj-AqZXcL49w4V-lW2_0kVJ5F3zEGp4",
  authDomain: "react-firebase-auth-contextapi.firebaseapp.com",
  projectId: "react-firebase-auth-contextapi",
  storageBucket: "react-firebase-auth-contextapi.firebasestorage.app",
  messagingSenderId: "339826671529",
  appId: "1:339826671529:web:d83870bfd0e0c4c8590eb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)