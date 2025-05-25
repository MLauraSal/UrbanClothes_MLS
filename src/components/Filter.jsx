import "../assets/css/Filter.css";
import "../assets/css/Global.css";

import ProductShowcase from "./ProductShowcase.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories} from "../Services/fakeApi.js";
import { useProducts } from "../hooks/useProducts.js";

const Filter = () => {
  const { products } = useProducts();
  const bestSellers = products.slice(0, 4);
 
  
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);

  const goToCategory = (cat) => {
    navigate(`/shop/${cat}`);
  };

  return (
    <div className="sidebar has-scrollbar">
      <div className="filters-content">
        <div className="filters-category">
          <div className="filters-top">
            <h2 className="filters-title">Category</h2>
          </div>

          <ul className="Filter-menu-category-list">
            {categories.map((cat, i) => (
              <li className="filter-menu-category" key={i}>
                <div className="filter-title-flex">
            

                  <p className="filter-menu-title">{cat}</p>
                </div>
                <label>
                  <input
                    type="checkbox"
                    className="filter-type"
                    onChange={() => goToCategory(cat)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-showcase">
        <ProductShowcase title="Best Sellers" products={bestSellers} compact />
      </div>
    </div>
  );
};

export default Filter;