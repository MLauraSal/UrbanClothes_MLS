import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shopping";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { useProducts } from "./hooks/useProducts";
import MobileNav from "./components/MobileNav";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const { products } = useProducts();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <Router>
      <div className="overlay" data-overlay></div>

      <MobileNav />
      <Header toggleCart={toggleCart} />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />

          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route
            path="/shop/:categories"
            element={<Shop products={products} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
