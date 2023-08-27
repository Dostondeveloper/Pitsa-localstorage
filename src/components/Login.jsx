import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      savedUserData &&
      savedUserData.username === username &&
      savedUserData.password === password
    ) {
      onLogin(savedUserData);
      navigate("/");
    } else {
      alert("Login topilmadi");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account? <Link to="/reg">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;