// src/components/Header/HeaderMain.jsx
import Logo from "../assets/img/logo/3.png";
import FullscreenSearch from "./FullScreenSearch";
import { useState } from "react";


const HeaderMain = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <div className="header-main">
        <div className="container wide">
          <div className="wrap">
            <div className="header-left">
              <ul className="list-inline">
                <li >
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
                <img src={Logo} alt="logo" width="150" height="80" />
              </a>
            </div>
            <div className="header-right">
              <ul className="list-inline">
                <li>
                <button
                    className="action-btn"
                    onClick={() => setIsSearchOpen(true)}
                    style={{ background: 'none', border: 'none' }}
                  >
                    <ion-icon name="search-outline" className="search-trigger"></ion-icon>
                  </button>
                </li>
                <li>
                  <a href="#" className="icon-cart">
                    <ion-icon
                      name="bag-handle-outline"
                      className="action-btn"
                    ></ion-icon>
                    <span className="item-floating">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FullscreenSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default HeaderMain;
