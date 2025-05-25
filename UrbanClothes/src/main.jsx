import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProductProvider } from './Context/ProductsContext.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import {AuthProvider} from './Context/AuthContext.jsx'

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProductProvider>
      <CartProvider>
        <AuthProvider> 
          <App />
        </AuthProvider>
      </CartProvider>
    </ProductProvider>
  </StrictMode>
);
