// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT0BOzTw9BfMYMxLMUT49Mt5hMlOkz7fQ",
  authDomain: "react-tutorial-d88dd.firebaseapp.com",
  projectId: "react-tutorial-d88dd",
  storageBucket: "react-tutorial-d88dd.appspot.com",
  messagingSenderId: "29213859686",
  appId: "1:29213859686:web:c8896d6c148144bd6232a7",
  measurementId: "G-JF6WTM6G38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);