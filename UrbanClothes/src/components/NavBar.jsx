import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/Header.css";
import "../assets/css/Global.css";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg desktop-navigation-menu">
      <div className="container-fluid d-flex align-items-lg-center">

        <div className="collapse navbar-collapse container" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 desktop-menu-category-list">

            {/* HOME */}
            <li className="nav-item menu-category">
              <Link to="/" className="nav-link active menu-title">Home</Link>
            </li>

            {/* CATEGORIES */}
            <li className="nav-item dropdown menu-category">
              <Link to="/shop" className="nav-link dropdown-toggle menu-title" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>

              <div className="dropdown-panel">
                  {/* Men's Fashion */}
                  <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/shop">Men's Fashion</Link>
                  </li>
                  <li className="panel-list-item"><Link to="/shop/formal">Formal</Link></li>
                  <li className="panel-list-item"><Link to="/shop/casual">Casual</Link></li>
                  <li className="panel-list-item"><Link to="/shop/sports">Sports</Link></li>
                  <li className="panel-list-item"><Link to="/shop/jacket">Jacket</Link></li>
                  <li className="panel-list-item"><Link to="/shop/sunglasses">Sunglasses</Link></li>
                  <li className="panel-list-item">
                    <Link to="/shop">
                      <img src="../../public/assets/img/banner/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                    </Link>
                  </li>
                </ul>

                {/* Women's Fashion */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/shop">Women's Fashion</Link>
                  </li>
                  <li className="panel-list-item"><Link to="/shop/formal-w">Formal</Link></li>
                  <li className="panel-list-item"><Link to="/shop/casual-w">Casual</Link></li>
                  <li className="panel-list-item"><Link to="/shop/perfume">Perfume</Link></li>
                  <li className="panel-list-item"><Link to="/shop/cosmetics">Cosmetics</Link></li>
                  <li className="panel-list-item"><Link to="/shop/bags">Bags</Link></li>
                  <li className="panel-list-item">
                    <Link to="/shop">
                      <img src="../../public/assets/img/banner/womens-banner.jpg"alt="women's fashion" width="250" height="119" />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

           
            <li className="nav-item dropdown menu-category">
              <Link to="#" className="nav-link dropdown-toggle menu-title" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-list">
                <li className="dropdown-item"><Link to="/about">About</Link></li>
                <li className="dropdown-item"><Link to="/faqs">FAQs</Link></li>
                {!user && (
                  <li className="dropdown-item"><Link to="/login">Login</Link></li>
                )}
                <li className="dropdown-item"><Link to="/contact">Contact</Link></li>
                <li className="dropdown-item"><Link to="/shop">Shopping</Link></li>
                {user?.role === "admin" && (
                  <li className="dropdown-item"><Link to="/dashboard">Dashboard</Link></li>
                )}
              </ul>
            </li>

           
            <li className="nav-item menu-category">
              <Link to="/shop" className="nav-link menu-title">Products</Link>
            </li>

            
            <li className="nav-item menu-category">
              <a href="#section-blog" className="nav-link menu-title">Blog</a>
            </li>

           
            <li className="nav-item menu-category">
              <a href="#services" className="nav-link menu-title">Services</a>
            </li>

            
            {!user && (
              <li className="nav-item menu-category">
                <Link to="/login" className="nav-link menu-title">Login</Link>
              </li>
            )}

          </ul>
        </div>

      </div>
    </nav>
  );
}
