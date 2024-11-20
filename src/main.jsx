import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContexProvider } from './contex/AuthContex.jsx'
import MenuContexProvider  from './contex/MenuContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContexProvider>
      <MenuContexProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
      </MenuContexProvider>
    </AuthContexProvider>
  </StrictMode>,
)
