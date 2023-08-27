import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo.svg";
import CART from "../assets/Frame.svg";

export default function Navbar({ signUp, setSignUp }) {
  const username = localStorage.getItem("username");
  
  return (
    <div className="nav-wrap">
      <Link to="/">
        <div className="nav-logo">
          <img src={LOGO} alt="" />
          <div className="nav-title">
            <h1>PIZZABEK</h1>
            <p>eng mazali pitsalar faqatgina bizda)</p>
          </div>
        </div>
      </Link>
      <input type="search" placeholder="Pitsalarni qidirish" />
      <Link to="/cart">
        <button>
          <span>0 UZS</span>
          <img src={CART} alt="" />
          <span>0</span>
        </button>
      </Link>
      <Link to="/reg">
        <button>{signUp ? "Sign In" : "Sign Up"}</button>
      </Link>
      {username && <span>Welcome, {username}!</span>}
    </div>
  );
}