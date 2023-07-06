import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { StateContextProvider } from './StateContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StateContextProvider>
    <App />

  </StateContextProvider>
  </BrowserRouter>

)
