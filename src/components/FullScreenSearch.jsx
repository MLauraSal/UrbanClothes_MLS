
import { useState, useEffect } from 'react';
import "../assets/css/Header.css";
import "../assets/css/Global.css";
const FullscreenSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleBodyClick = () => close();
    document.body.addEventListener('click', handleBodyClick);
    return () => document.body.removeEventListener('click', handleBodyClick);
  }, []);

  return (
    <div className={`search-wrap ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
      <div className="search-inner">
        <ion-icon name="close-outline" className="search-close" onClick={close}></ion-icon>
        <div className="search-cell">
          <form>
            <input
              type="search"
              className="main-search-input"
              placeholder="Search..."
              onClick={(e) => e.stopPropagation()}
            />
          </form>
        </div>
      </div>

    
    </div>
  );
};

export default FullscreenSearch;
