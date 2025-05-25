import "../assets/css/ProductList.css";
import "../assets/css/ProductsGrid.css";
import "../assets/css/Sidebar.css";
import "../assets/css/Global.css";
import { useProducts } from "../Context/ProductsContext.jsx";

export default function Shop() {
  const { products } = useProducts();
  return (
    <>
      <main>
        <div class="page-header ">
          <div class="container">
            <h1 class="page-title">
              <span>Shop</span>
            </h1>
          </div>
        </div>
        <div className="product-container">
          <div className="container">
            <div className="filters-content">
              <div className="filters-category">
                <div className="filters-top">
                  <h2 className="filters-title">Category</h2>
                </div>
                <ul className="Filter-menu-category-list">
                  <li className="filter-menu-category">
                    <div className="filter-title-flex">
                      <img
                        src="../../public/assets/img/icons/woman-clothes.png"
                        alt=""
                        width="20"
                        height="20"
                        className="menu-title-img"
                      />
                      <p className="filter-menu-title">Women's</p>
                    </div>
                    <label htmlFor="">
                      {" "}
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="filter-type"
                      />
                    </label>
                  </li>
                  <li className="filter-menu-category">
                    <div className="filter-title-flex">
                      <img
                        src="../../public/assets/img/icons/shorts.svg"
                        alt=""
                        width="20"
                        height="20"
                        className="menu-title-img"
                      />
                      <p className="filter-menu-title">Men's</p>
                    </div>
                    <label htmlFor="">
                      {" "}
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="filter-type"
                      />
                    </label>
                  </li>
                  <li className="filter-menu-category">
                    <div className="filter-title-flex">
                      <img
                        src="../../public/assets/img/icons/juego-de-pc.png"
                        alt=""
                        width="20"
                        height="20"
                        className="menu-title-img"
                      />
                      <p className="filter-menu-title">Electronics</p>
                    </div>
                    <label htmlFor="">
                      {" "}
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="filter-type"
                      />
                    </label>
                  </li>
                  <li className="filter-menu-category">
                    <div className="filter-title-flex">
                      <img
                        src="../../public/assets/img/icons/jewelry.svg"
                        alt=""
                        width="20"
                        height="20"
                        className="menu-title-img"
                      />
                      <p className="filter-menu-title">Jewelry</p>
                    </div>
                    <label htmlFor="">
                      {" "}
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="filter-type"
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-main">
              <h2 class="title">New Products</h2>
              <div className="product-grid">
                {products.map((products) => (
                  <div className="product-container">
                    <div className="container">
                      <div className="product-grid">
                        <h2 className="title">Shop Products</h2>
                        <div className="product-grid">
                          {products.map((product) => (
                            <div className="showcase" key={product.id}>
                              <div className="showcase-banner">
                                <img
                                  src={product.image}
                                  alt={product.title}
                                  className="product-img "
                                  style={{ width: "300" }}
                                />
                              </div>

                              <div className="showcase-action">
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
                                <button className="add-to-cart-btn">
                                  <ion-icon
                                    name="bag-handle-outline"
                                    class="btn-action"
                                  ></ion-icon>
                                </button>
                              </div>
                              <div className="showcase-content">
                                <p className="showcase-category">
                                  {product.category}
                                </p>
                                <a href="#">
                                  <h3 className="showcase-title">
                                    {product.title}
                                  </h3>
                                </a>
                                <p className="showcase-description">
                                  {product.description.length > 100
                                    ? product.description.substring(0, 97) +
                                      "..."
                                    : product.description}
                                </p>
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
                            </div>
                          ))}
                        </div>
                      </div>
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
