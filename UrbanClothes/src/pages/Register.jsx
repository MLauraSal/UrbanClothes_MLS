import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";
const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "profilePic") {
      setFormData({ ...formData, profilePic: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const profilePicUrl = formData.profilePic
      ? URL.createObjectURL(formData.profilePic)
      : "/assets/img/user-default.jpg";

    login({
      username: formData.username,
      name: formData.name,
      email: formData.email,
      profilePic: profilePicUrl,
    });
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: `Bienvenido, ${formData.username}!`,
      timer: 1500,
      showConfirmButton: false
    });
    navigate('/');
  };

  return (
    <div className="wrapper">
      <div className="form-box">
        <form className="register-container" onSubmit={handleSubmit}>
          <div className="top">
            <div className="login-logo">
              <img src="/assets/img/Logo-removebg-preview.png" alt="Logo" />
            </div>
            <h1 className="form-title">Register</h1>
            <span>
              You have an account? <a href="/login">Sign in</a>
            </span>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <i className="fas fa-user" id="icono"></i>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="name"
              className="input-field"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <i className="fas fa-user" id="icono"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className="fas fa-envelope" id="icono"></i>
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
            <label htmlFor="profilePic" className="file-label">
              Foto de Perfil
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
