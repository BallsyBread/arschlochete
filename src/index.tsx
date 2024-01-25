import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { AuthProvider } from './services/AuthContext'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </React.StrictMode>
)