
import "../assets/css/Global.css";
import "../assets/css/ProductsFeatures.css";

const featuredData = [
  {
   
    
    imageDefault: "../../public/assets/img/products/shampoo.jpg",
    name: "shampoo, conditioner & facewash packs",
    price: 19.99,
    priceOriginal: 29.99,
    description: "Nourishing shampoo with natural ingredients. Leaves your hair soft, shiny, and healthy from the first wash. Don’t miss this limited-time offer!",
  
  },
  {
   
    name: "Leather Jacket",
    imageDefault: "../../public/assets/img/products/jewellery-1.jpg",
    price: 89.99,
    priceOriginal: 129.99,
    description: "Elegant and lightweight earrings to elevate any look. Perfect for day or night. Special offer – limited time only!.",
    
  },
  {
   
    name: "Running Shoes",
    imageDefault: "../../public/assets/img/collection-1.jpg",
    price: 49.99,
    priceOriginal: 69.99,
    description: "Lightweight running shoes for maximum performance.",
  
  }
]
const ProductFeature = () => {
  return (
    <div className='product-feature'>
      <h2 className="title">Deal of the day</h2>

      <div className="product-feature_wrapper has-scrollbar">
        {featuredData.map((feature,index) => (
          <div className="product-feature_container" key={index}>
            <div className="product-feature_showcase">
              <div className="product-feature_banner">
                <img
                  src={feature.imageDefault}
                  alt={feature.name}
                  className="showcase-img"
                />
              </div>

              <div className="product-feature_content">
                <div className="product-feature_rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <a href="#">
                  <h3 className="product-feature_title">{feature.name}</h3>
                </a>

                <p className="product-feature_-desc">
                  {feature.description || 'Limited-time offer for selected items.'}
                </p>

                <div className="product-feature_price-box">
                  <p className="product-feature_price">${feature.price}</p>
                  <del>${feature.priceOriginal}</del>
                </div>

                <button className="add-cart-btn">Add to cart</button>

                <div className="product-feature_status">
                  <div className="wrapper">
                    <p>already sold: <b>20</b></p>
                    <p>available: <b>40</b></p>
                  </div>
                  <div className="product-feature_bar"></div>
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
