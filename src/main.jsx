import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MouseFollower } from 'react-mouse-follower'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseFollower/>
    <App />
  </StrictMode>,
)
