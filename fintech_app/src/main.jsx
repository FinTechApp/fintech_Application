import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import UploadId from './pages/Onboarding/UploadId.jsx'
import UploadPassport from './pages/Onboarding/UploadPassport.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)