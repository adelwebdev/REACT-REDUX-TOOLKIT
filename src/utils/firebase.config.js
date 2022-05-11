// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const app = firebaseConfig.initializeApp({
  apiKey: "AIzaSyBz22qbMm04IhrCtJUzP5TyLxHloWGcShw",
  authDomain: "react-firebase-redux-34f97.firebaseapp.com",
  projectId: "react-firebase-redux-34f97",
  storageBucket: "react-firebase-redux-34f97.appspot.com",
  messagingSenderId: "767734460664",
  appId: "1:767734460664:web:3b11c1c5f90d2025c84b0d"
});

export const auth = app.auth();
export default app;