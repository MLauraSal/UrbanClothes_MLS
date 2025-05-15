import React from 'react'
import { Link } from 'react-router-dom';

import "../assets/css/Header.css";
import "../assets/css/Global.css";



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg desktop-navigation-menu">
    <div className="container-fluid d-flex align-items-lg-center">
      <div className="collapse navbar-collapse container" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 desktop-menu-category-list">

          <li className="nav-item menu-category">
            <Link to="/" className="nav-link active menu-title">Home</Link>
          </li>

          <li className="nav-item dropdown menu-category">
            <Link to="/shop" className="menu-title">Productos</Link>
            
          </li>
          <li className="nav-item dropdown menu-category">
            <Link to="/about" className="menu-title">About</Link>
    
          </li>

          <li className="nav-item menu-category">
            <Link to="/cart" className="menu-title">Shopping Cart</Link>
          </li>

          <li className="nav-item menu-category">
            <Link to="/blog" className="menu-title">Blog</Link>
          </li>

          <li className="nav-item menu-category">
            <Link to="/services" className="menu-title">Services</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

   
    
  )
}

export default NavBar
