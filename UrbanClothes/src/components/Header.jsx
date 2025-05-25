
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import NavBar from "./Navbar";
import "../assets/css/Global.css";
import "../assets/css/Header.css";

const Header =  ({ toggleCart, cartItems })=> {

  return (
    <div>
      <HeaderTop />
      <HeaderMain toggleCart={toggleCart} cartItems={cartItems} />
      <NavBar />
      
    </div>
  )
}

export default Header
