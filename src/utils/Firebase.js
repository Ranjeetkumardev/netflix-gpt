// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAE0hgaQNsirzCLXQrT0-qXCCyKok4Pc4",
  authDomain: "netflixgpt-993b7.firebaseapp.com",
  projectId: "netflixgpt-993b7",
  storageBucket: "netflixgpt-993b7.appspot.com",
  messagingSenderId: "644898674794",
  appId: "1:644898674794:web:a9d3237ab2d307043b5213",
  measurementId: "G-MM32ND2GWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
