import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThisUserContextProvider } from './context/thisUserContext.tsx'
import { PostsContextProvider } from './context/postsContext.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThisUserContextProvider >
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </ThisUserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
