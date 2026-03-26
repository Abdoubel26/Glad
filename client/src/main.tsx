import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThisUserContextProvider } from './context/thisUserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThisUserContextProvider >
      <App />
    </ThisUserContextProvider>
  </StrictMode>,
)
