import React, { useState, useEffect } from "react";
import { getAllProducts } from "../Services/fakeApi";
import ProductMinimal from "./ProductMinimal";
import ProductFeature from "./ProductFeature";
import Filter from "./Filter";
import ProductGrid from "./ProductsGrid";
import { useCart } from "../hooks/useCart"; 


const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const filteredProducts = filteredCategory
    ? products.filter((p) =>
        p.category.toLowerCase().includes(filteredCategory)
      )
    : products;

  return (
    <div className="product-container">
      <div className="container">
        <Filter onCategorySelect={handleCategorySelect} products={products} />
       
        <div className="product-box">
          {filteredCategory ? `Results for "${filteredCategory}"` : "All Products"}
          <ProductMinimal />
          <ProductFeature />
          <ProductGrid products={filteredProducts} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
