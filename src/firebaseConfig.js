// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNgSVO9z2CKXtIcHUsGbJza11c7Vsnub4",
  authDomain: "fitfreak-9d84b.firebaseapp.com",
  projectId: "fitfreak-9d84b",
  storageBucket: "fitfreak-9d84b.appspot.com",
  messagingSenderId: "866201181212",
  appId: "1:866201181212:web:d573bdfbf213aedc1b93d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };