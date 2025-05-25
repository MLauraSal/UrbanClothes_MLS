// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

import { getUsers } from '../Services/userService';
import { getAllProducts } from '../Services/fakeApi';

const Dashboard = () => {
  const { user } = useAuth();
 
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setUsers(getUsers()); 
    getAllProducts().then(setProducts); 
  }, []);

  return (
    <div className="dashboard">
      <h2>DashBoard </h2>

      <section>
        <h3>Usuarios</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Productos</h3>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} width={100} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
