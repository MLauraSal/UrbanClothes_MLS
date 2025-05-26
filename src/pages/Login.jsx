import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from 'sweetalert2';
import '../assets/css/Login.css';
import '../assets/css/Global.css'

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { username, password } = formData;
  
    let fakeUser;
  
    if (username === "admin" && password === "admin1234") {
      fakeUser = {
        username: "admin",
        profilePic: "/assets/img/avatar/user-default.jpg",
        role: "admin",
      };
    } else {
      fakeUser = {
        username,
        profilePic: "/assets/img/user-default.jpg",
        role: "user",
      };
    }
  
   
    login(fakeUser);
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: `Hola, ${username}!`,
      timer: 1000,
      showConfirmButton: false
    }).then(() => {
      if (fakeUser.role === "admin") {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    });
    
  };
  
  return (
   <div className="body_container">
     <div className="wrapper">
      <div className="form-box">
        <form className="container login-container" onSubmit={handleSubmit}>
          <div className="top">
           
            <h1>Bienvenido</h1>
            <h2 className="form-title">Login</h2>
            <span>
              Don't have an account? <a href="/register">Sign Up</a>
            </span>
          </div>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <i className="fas fa-user" id="icono"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i className="fas fa-lock" id="icono"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Login" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Login;
