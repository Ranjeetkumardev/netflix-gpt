import { getAuth } from "firebase/auth";
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8OqQpEbcsH7IfHcVH03rDqLaVhKRirnA",
  authDomain: "netflixgpt-4359d.firebaseapp.com",
  projectId: "netflixgpt-4359d",
  storageBucket: "netflixgpt-4359d.appspot.com",
  messagingSenderId: "17230919529",
  appId: "1:17230919529:web:72399d3dbae9022ceceff8",
  measurementId: "G-3SR6RKR22L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
