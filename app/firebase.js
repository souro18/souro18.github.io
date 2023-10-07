// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw3BVzBaVFpsoqvFW4MBfOGD_KFcukG_c",
  authDomain: "sourajit-paul.firebaseapp.com",
  projectId: "sourajit-paul",
  storageBucket: "sourajit-paul.appspot.com",
  messagingSenderId: "659160902049",
  appId: "1:659160902049:web:2054a293cab5f3220ac3e0",
  measurementId: "G-DZ63JKGLPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);