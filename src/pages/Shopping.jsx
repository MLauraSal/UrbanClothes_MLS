import "../assets/css/Shopping.css";
import "../assets/css/ProductsGrid.css";
import "../assets/css/Filter.css";
import "../assets/css/Global.css";
import Filter from "../components/Filter.jsx";
import { useProducts } from "../hooks/useProducts.js";
import { useCart } from "../hooks/useCart.js";
import { Link } from 'react-router-dom';

export default function Shop() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  return (
    <>
      <main>
        <section className="banner">
          <div className="banner-container container">
            <div className="banner-item">
              <img src="/assets/img/banner/1.png" className="banner-img"></img>
            </div>
          </div>
        </section>
        <div className="product-container">
          <div className="container">
            <Filter />

            <div className="product-main">
              <h2 class="title">New Products</h2>
              <div className="product-grid">
                {products.map((product) => (
                  <div className="showcase" key={product.id}>
                    <div className="showcase-banner">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="showcase-img "
                        width="70"
                      />

                      <p className="showcase-badge">15%</p>
                      <div className="showcase-actions">
                        <button>
                          <ion-icon
                            name="heart-outline"
                            className="btn-action"
                          ></ion-icon>
                        </button>

                        <button>
                          <ion-icon
                            name="eye-outline"
                            className="btn-action"
                          ></ion-icon>
                        </button>

                        <button>
                          <ion-icon
                            name="repeat-outline"
                            className="btn-action"
                          ></ion-icon>
                        </button>
                        <button onclick="addToCart">
                          <ion-icon
                            name="bag-handle-outline"
                            className="btn-action"
                          ></ion-icon>
                        </button>
                      </div>
                    </div>

                    <div className="showcase-content">
                      <p className="showcase-category">{product.category}</p>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="showcase-title">{product.title}</h3>
                      </Link>

                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <p className="price">${product.price}</p>
                      </div>
                    </div>
                    <div className="add-box">
                      <button
                        className="add-button"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
