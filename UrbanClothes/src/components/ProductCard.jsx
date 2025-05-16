const ProductCard = ({ product }) => {
    return (
      <div className="showcase">
        <div className="showcase-banner">
          <img
            src={product.imageDefault}
            alt={product.name}
            className="product-img default"
          />
          <img
            src={product.imageHover}
            alt={`${product.name} hover`}
            className="product-img hover"
          />
        </div>
  
        <div className="showcase-content">
          <a href="#">
            <h3 className="showcase-title">{product.name}</h3>
          </a>
          <p className="showcase-category">{product.category}</p>
  
          <div className="price-box">
            <p className="price">${product.price.toFixed(2)}</p>
            <del>${product.priceOriginal.toFixed(2)}</del>
          </div>
  
          <button className="add-cart-btn">Add to cart</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;