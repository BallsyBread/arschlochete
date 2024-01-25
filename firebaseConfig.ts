// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFS2ncBU6OfMsuIII4mgvZq7l5ohUvbgE",
  authDomain: "arschlochete.firebaseapp.com",
  projectId: "arschlochete",
  storageBucket: "arschlochete.appspot.com",
  messagingSenderId: "134439708415",
  appId: "1:134439708415:web:91bb7f506f32d53af4ceca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;