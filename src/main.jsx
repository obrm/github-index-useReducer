import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>,
)
