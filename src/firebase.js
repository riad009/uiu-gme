// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA413CZy5wnCPv5yP1ovO3UZGw_QL8uxmo",
  authDomain: "uiu-game.firebaseapp.com",
  projectId: "uiu-game",
  storageBucket: "uiu-game.appspot.com",
  messagingSenderId: "360653763209",
  appId: "1:360653763209:web:96f5446707f027c41a8c58",
  measurementId: "G-N2RFY92WBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);