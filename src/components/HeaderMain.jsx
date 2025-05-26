import "../assets/css/Header.css";
import "../assets/css/Global.css";
import { useRef, useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

const HeaderMain = ({ toggleCart }) => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                <li ref={dropdownRef} className="dropdown-avatar">
                  {user && user.profilePic ? (
                    <>
                      <img
                        src={user.profilePic}
                        alt="avatar"
                        className="avatar-img"
                        onClick={toggleDropdown}
                        style={{ cursor: "pointer" }}
                      />
                      {dropdownOpen && (
                        <div className="dropdown-menu">
                          <a href="/profile" className="dropdown-item">
                            Mi perfil
                          </a>
                          {user.role === "admin" && (
                            <a href="/dashboard" className="dropdown-item">
                              Dashboard
                            </a>
                          )}
                          <button
                            className="dropdown-item"
                            onClick={() => {
                              logout();
                              Swal.fire({
                                icon: "info",
                                title: "Sesión cerrada",
                                text: "Tu sesión se cerró correctamente.",
                                timer: 1500,
                                showConfirmButton: false,
                              });
                            }}
                          >
                            Cerrar sesión
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <a href="/login" id="login-btn" className="left-item">
                      <ion-icon name="person-outline"></ion-icon>
                    </a>
                  )}
                </li>
              </ul>
            </div>
            <div className="header-center">
              <a href="#" className="branding">
                <img
                  src="/assets/img/logo/3.png"
                  alt="logo"
                  width="150"
                  height="80"
                />
              </a>
            </div>
            <div className="header-right">
              <ul className="list-inline">
                <li>
                  <button>
                    {" "}
                    <ion-icon
                      name="search-outline"
                      className="search-trigger"
                    ></ion-icon>
                  </button>
                </li>

                <li>
                  <button className="action-btn icon-cart" onClick={toggleCart}>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    <span className="item-floating">{cartItems.length}</span>
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
