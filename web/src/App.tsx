import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

import Home from './Home'
import Privacy from './Privacy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
