import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-item">
        <img src="stamps/grocery.jpg" alt="Header" className="header-image" />
        <p>Grocery</p>
      </div>
      <div className="header-item">
        <img src="stamps/mobile.jpg" alt="Header" className="header-image" />
        <p>Mobiles</p>
      </div>
      <div className="header-item">
        <img src="stamps/fashion.png" alt="Header" className="header-image" />
        <p>Fashion</p>
      </div>
      <div className="header-item">
        <img src="stamps/electronics.jpg" alt="Header" className="header-image" />
        <p>Electronics</p>
      </div>
      <div className="header-item">
        <img src="stamps/furniture.jpg" alt="Header" className="header-image" />
        <p>Furniture</p>
      </div>
      <div className="header-item">
        <img src="stamps/appliances.jpg" alt="Header" className="header-image" />
        <p>Appliances</p>
      </div>
      <div className="header-item">
        <img src="stamps/travel.jpg" alt="Header" className="header-image" />
        <p>Travel</p>
      </div>
      <div className="header-item">
        <img src="stamps/toys.jpg" alt="Header" className="header-image" />
        <p>Toys</p>
      </div>
    </div>
  );
}