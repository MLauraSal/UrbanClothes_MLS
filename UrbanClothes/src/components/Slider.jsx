import React, { useEffect} from 'react';

import "../assets/css/Global.css";
import "../assets/css/Header.css";

const Slider = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider-1');
    const slides = document.querySelectorAll('.slide-1');
    let currentIndex = 0;
  
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="slider-1">
      <div className="slide-1 active">Spring Fashion Sale</div>
      <div className="slide-1">Summer sale discount off 70%</div>
      <div className="slide-1">Time to refresh your wardrobe.</div>
    </div>

  );
};

export default Slider;
