import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Header.css";
import "../assets/css/Global.css";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";


const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAccordion = (index) =>
    setActiveAccordion(activeAccordion === index ? null : index);

  const handleLogout = () => {
    logout();
    Swal.fire({
      icon: "info",
      title: "Sesión cerrada",
      text: "Tu sesión se cerró correctamente.",
      timer: 1500,
      showConfirmButton: false,
    });
    navigate("/");
  };

  return (
    <>
      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={toggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        {user && user.profilePic ? (
          <button className="action-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <img src={user.profilePic} alt="Profile" className="avatar-img" />
          </button>
        ) : (
          <button className="action-btn" onClick={handleLogout}>
            <ion-icon name="person-outline"></ion-icon>
          </button>
        )}

        <button className="action-btn">
          <Link to="/">
            <ion-icon name="home-outline"></ion-icon>
          </Link>
        </button>

        {user && (
          <button className="action-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        )}
      </div>

      {/* Menú hamburguesa */}
      <div className={`mobile-navigation-menu has-scrollbar ${menuOpen ? "active" : ""}`}>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={toggleMenu}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link to="/" className="menu-title">Home</Link>
          </li>

          {["Men's", "Women's", "Jewelry", "Electronics"].map((title, index) => (
            <li className="menu-category" key={index}>
              <button
                className={`accordion-menu ${activeAccordion === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <p className="menu-title">{title}</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === index ? "active" : ""}`}>
                <li className="submenu-category"><a href="#" className="submenu-title">Option 1</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Option 2</a></li>
                <li className="submenu-category"><a href="#" className="submenu-title">Option 3</a></li>
              </ul>
            </li>
          ))}

          <li className="menu-category"><Link to="/blog" className="menu-title">Blog</Link></li>
          <li className="menu-category"><Link to="/contact" className="menu-title">Contact</Link></li>
          <li className="menu-category">
            <Link to="/login" className="menu-title">Login</Link>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-social-container">
            {["facebook", "twitter", "instagram", "linkedin"].map((net, i) => (
              <li key={i}>
                <a href="#" className="social-link">
                  <ion-icon name={`logo-${net}`}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {sidebarOpen && user && (
        <div
          className="mobile-navigation-menu active"
          style={{ zIndex: 1001 }}
        >
          <div className="menu-top">
            <h2 className="menu-title">Mi cuenta</h2>
            <button className="menu-close-btn" onClick={() => setSidebarOpen(false)}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
            <img
              src={user.profilePic}
              alt="Perfil"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "0.5rem"
              }}
            />
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>{user.username}</p>
          </div>

          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <Link to="/profile" className="menu-title">Mi perfil</Link>
            </li>
            <li className="menu-category">
              <Link to="/favorites" className="menu-title">Mis favoritos</Link>
            </li>
            <li className="menu-category">
              <button
                onClick={() => {
                  setSidebarOpen(false);
                  handleLogout();
                }}
                className="menu-title"
                style={{ background: "none", border: "none", padding: 0 }}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
