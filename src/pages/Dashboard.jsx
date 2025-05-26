// src/pages/Dashboard.jsx
import { useState } from "react";
import UsersTable from "../components/UsersTable";
import ProductsTable from "../components/ProductsTable";
import "../assets/css/Dashboard.css"; 
import "../assets/css/Global.css";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
   <main className="main-container container">
     <div className="content">
      <div className="row">
        <div className="col-md-12">
          <h1>Panel de Administración</h1>
          <h2>Gestión de Usuarios y Productos</h2>
        </div>
      </div>

      <div className="tabs-container ">
        <div role="tablist" className="manual">
          <button type="button" role="tab" 
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            <span className="focus">Usuarios</span>
          </button>
          <button type="button" role="tab" tabindex="-1"
            className={activeTab === "products" ? "active" : ""}
            onClick={() => setActiveTab("products")}
          >
            <span className="focus">Productos</span>
          </button>
        </div>
      </div>

      <div>
        {activeTab === "users" && <UsersTable />}
        {activeTab === "products" && <ProductsTable />}
      </div>
    </div>
   </main>
  );
};

export default Dashboard;


