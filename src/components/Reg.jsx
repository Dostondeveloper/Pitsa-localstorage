import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Reg = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username.length === 0 || password.length === 0) {
      alert("Iltimos, barcha ma'lumotlarni to'ldiring.");
    } else {
      const userData = { username, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="reg-container">
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
          minLength={3}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/login">
          <button className="reg-btn" onClick={handleSignUp}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reg;