

const ProductShowcase = ({ title, products, compact = false }) => {
  return (
    <div className="product-showcase">
      {title && <h3 className="showcase-heading">{title}</h3>}

      <div className="showcase-wrapper">
        {products.map((product) => (
          <div className="showcase" key={product.id}>
            <a href="#" className="showcase-img-box">
              <img
                src={product.imageDefault}
                alt={product.name}
                width={compact ? "75" : "70"}
                height={compact ? "75" : "70"}
                className="showcase-img"
              />
            </a>

            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">{product.name}</h4>
              </a>

              {product.rating && (
                <div className="showcase-rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <ion-icon
                      key={n}
                      name={
                        product.rating >= n
                          ? "star"
                          : product.rating >= n - 0.5
                          ? "star-half-outline"
                          : "star-outline"
                      }
                    ></ion-icon>
                  ))}
                </div>
              )}

              {product.category && (
                <a href="#" className="showcase-category">
                  {product.category}
                </a>
              )}

              <div className="price-box">
                <del>${product.priceOriginal}</del>
                <p className="price">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
