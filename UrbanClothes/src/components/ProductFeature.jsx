import React from 'react'

import '../assets/css/Home.css'
import '../assets/css/Global.css'



const ProductFeature = ({ featuredProducts }) => {
  return (
    <div className='product-feature'>
      <h2 className="title">Deal of the day</h2>

      <div className="showcase-wrapper has-scrollbar">
        {featuredProducts.map((product) => (
          <div className="showcase-container" key={product.id}>
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src={product.imageDefault}
                  alt={product.name}
                  className="showcase-img"
                />
              </div>

              <div className="showcase-content">
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <a href="#">
                  <h3 className="showcase-title">{product.name}</h3>
                </a>

                <p className="showcase-desc">
                  {product.description || 'Limited-time offer for selected items.'}
                </p>

                <div className="price-box">
                  <p className="price">${product.price.toFixed(2)}</p>
                  <del>${product.priceOriginal.toFixed(2)}</del>
                </div>

                <button className="add-cart-btn">Add to cart</button>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>already sold: <b>{product.sold || 10}</b></p>
                    <p>available: <b>{product.available || 40}</b></p>
                  </div>
                  <div className="showcase-status-bar"></div>
                </div>

                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">3</p>
                      <p className="display-text">Days</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">12</p>
                      <p className="display-text">Hours</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeature;
