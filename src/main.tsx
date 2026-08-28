import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './CartContext.tsx'
import { LanguageProvider } from './LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </CartProvider>
  </StrictMode>,
)
