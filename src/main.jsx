import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './context/Context'
import './index.css'
import * as functions from './controllers/functions'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider value={functions}>
      <App />
    </ContextProvider>
)
