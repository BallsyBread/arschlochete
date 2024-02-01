// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFS2ncBU6OfMsuIII4mgvZq7l5ohUvbgE",
    authDomain: "arschlochete.firebaseapp.com",
    projectId: "arschlochete",
    storageBucket: "arschlochete.appspot.com",
    messagingSenderId: "134439708415",
    appId: "1:134439708415:web:91bb7f506f32d53af4ceca"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;