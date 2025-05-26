// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import "../assets/css/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Loading...</p>;
  // productos relacionados: misma categoría, excluyendo el actual
const relatedProducts = products.filter(
  (p) => p.category === product.category && p.id !== product.id
);


  return (
   <>
     <section className="product-detail">
      <div className="container detail-container">
        <div className="product-images">
          <img src={product.image} alt={product.title} className="main-image" />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="price">${product.price}</p>
          <p className="description">
            {product.description || "No description available."}
          </p>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
      
    </section>
    {relatedProducts.length > 0 && (
      <section className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.slice(0, 4).map((item) => (
            <div className="related-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    )}
   </>
    
  );
};

export default ProductDetail;
