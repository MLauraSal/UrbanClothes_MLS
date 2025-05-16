// src/components/Sidebar.jsx
import "../assets/css/Home.css";
import "../assets/css/Global.css";
import dressIcon from "../../public//assets/img/icons/dress.svg";
import shoesIcon from "../../public/assets/img/icons/shoes.svg";
import jewelryIcon from "../../public/assets/img/icons/jewelry.svg";
import perfumeIcon from "../../public//assets/img/icons/perfume.svg";
import ProductShowcase from "./ProductShowcase";
import products from '../ProductsData'
// Agregá los íconos necesarios...

const sidebarData = [
  {
    title: "Clothes",
    icon: dressIcon,
    subcategories: [
      { name: "Shirt", stock: 300 },
      { name: "Shorts & jeans", stock: 60 },
      { name: "Jacket", stock: 50 },
      { name: "Dress & frock", stock: 87 },
    ],
  },
  {
    title: "Footwear",
    icon: shoesIcon,
    subcategories: [
      { name: "Sports", stock: 45 },
      { name: "Formal", stock: 75 },
      { name: "Casual", stock: 35 },
    ],
  },
  {
    title: "Jewelry",
    icon: jewelryIcon,
    subcategories: [
      { name: "Earrings", stock: 46 },
      { name: "Necklace", stock: 61 },
    ],
  },
  {
    title: "Perfum",
    icon: perfumeIcon,
    subcategories: [
      { name: "Clothes Perfume", stock: 12 },
      { name: "Deodorant", stock: 60  },
    ],
  },
];

const Sidebar = () => {
  const bestSellers = products.slice(0, 4);
  return (
    <aside className="sidebar has-scrollbar">
      <div className="sidebar-category">
        <h2 className="sidebar-title">Category</h2>
        <ul className="sidebar-menu-category-list">
          {sidebarData.map((cat, index) => (
            <li className="sidebar-menu-category" key={index}>
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img src={cat.icon} alt={cat.title} width="20" height="20" className="menu-title-img" />
                  <p className="menu-title">{cat.title}</p>
                </div>
                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className="sidebar-submenu-category-list">
                {cat.subcategories.map((sub, i) => (
                  <li className="sidebar-submenu-category" key={i}>
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">{sub.name}</p>
                      <data value={sub.stock} className="stock">{sub.stock}</data>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <ProductShowcase title="Best Sellers" products={bestSellers} compact />
    </aside>
  );
};

export default Sidebar;
