import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import Header from './components/Header';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  const increaseQuantity = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  
  return (
  
     <Router>
     <div class="overlay" data-overlay></div>
      <Header toggleCart={toggleCart} cartItems={cartItems} />
      <Cart
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cartTotal={cartTotal}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/shop/formal" element={<Shop />} />
          <Route path="/shop/casual" element={<Shop />} />
          <Route path="/shop/sports" element={<Shop />} />
          <Route path="/shop/jacket" element={<Shop />} />
          <Route path="/shop/sunglasses" element={<Shop />} />
          <Route path="/shop/formal-w" element={<Shop />} />
          <Route path="/shop/casual-w" element={<Shop />} />
          <Route path="/shop/perfume" element={<Shop />} />
          <Route path="/shop/cosmetics" element={<Shop />} />
          <Route path="/shop/bags" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
    </Router>
   
  );
}

export default App;
