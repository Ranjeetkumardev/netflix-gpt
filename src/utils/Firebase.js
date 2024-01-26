// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ZFPdkxUbjPLwJDgMn2bIy8sk4fF6edA",
  authDomain: "netflixgpt-6cb35.firebaseapp.com",
  projectId: "netflixgpt-6cb35",
  storageBucket: "netflixgpt-6cb35.appspot.com",
  messagingSenderId: "127748398424",
  appId: "1:127748398424:web:48775a55e30f3feb66192d",
  measurementId: "G-VJKXS9SN4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
