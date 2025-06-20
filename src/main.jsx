import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/inter/400.css' // Regular
import '@fontsource/inter/300.css' // Light
import '@fontsource/inter/600.css' // Semi-bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
