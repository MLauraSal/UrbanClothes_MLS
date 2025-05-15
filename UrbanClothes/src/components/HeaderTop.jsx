import Slider from "./Slider.jsx";
import Weather from "./Weather.jsx";
import "../assets/css/Global.css";
import "../assets/css/Header.css";

export default function HeaderTop () {
    return (
     <>
       <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-1">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" className="social-2">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" className="social-3">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
  
            <li>
              <a href="#" className="social-4">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
  
          <div className="slider-1-container">
            <Slider />
          </div>
  
          <div className="header-top-actions">
            <p className="weather-title">El clima en tu zona</p>
            <Weather />
          </div>
        </div>
      </div>
     </>
    );
  };
  
