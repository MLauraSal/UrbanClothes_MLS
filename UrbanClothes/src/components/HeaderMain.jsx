// src/components/Header/HeaderMain.jsx



import "../assets/css/Global.css";
import "../assets/css/Cart.css";

const HeaderMain = ({ toggleCart, cartItems = [] }) => {
 
  
  return (
    <>
      <div className="header-main">
        <div className="container wide">
          <div className="wrap">
            <div className="header-left">
              <ul className="list-inline">
                <li>
                  <a href="#" className="left-item">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span className="item-floating">0</span>
                  </a>
                </li>
                <li>
                  <a href="#" id="login-btn" className="left-item">
                    <ion-icon name="person-outline"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-center">
              <a href="#" className="branding">
                <img src="../../public/assets/img/logo/3.png" alt="logo" width="150" height="80" />
              </a>
            </div>
            <div className="header-right">
              <ul className="list-inline">
                <li>
                 <button> <ion-icon
                    name="search-outline"
                    className="search-trigger"
                  ></ion-icon></button>
                </li>
            
                <li>
                <button className="action-btn icon-cart" onClick={toggleCart}>
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  <span className="item-floating">{Array.isArray(cartItems) ? cartItems.length : 0}</span>

                </button>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HeaderMain;
