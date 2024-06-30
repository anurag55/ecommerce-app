import React from "react";

import "./index.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart Logo"
          className="logo"
        />
      </div>
      <div className="menu">
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
          <li><img alt="Profile" className="profile" src="user-profile.jpg" /></li>
        </ul>
      </div>
    </div>
  );
}