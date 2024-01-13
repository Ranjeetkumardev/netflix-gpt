// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY1eOyfqnxCcunK9vj3AveADwV01YWRVI",
  authDomain: "netflixgpt-b7a1a.firebaseapp.com",
  projectId: "netflixgpt-b7a1a",
  storageBucket: "netflixgpt-b7a1a.appspot.com",
  messagingSenderId: "366103296008",
  appId: "1:366103296008:web:f45bb0d681eafb1fa6b9bd",
  measurementId: "G-SG0QEYTLP7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
