// src/context/ProductContext.jsx
import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../Services/fakeApi.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext