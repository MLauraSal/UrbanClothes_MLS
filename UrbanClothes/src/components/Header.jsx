
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import NavBar from "./NavBar";


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
