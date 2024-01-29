import React from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";
import './index.css'
import App from './components/App'
import firebaseConfig from './firebaseConfig';

initializeApp(firebaseConfig);

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)