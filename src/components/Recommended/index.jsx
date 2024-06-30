import React from "react";

import "./Recommended.css";
import { useNavigate } from "react-router-dom";

export default function Recommended() {
  const navigate = useNavigate();
  return (
    <div className="recommended">
      <h1>Recommended</h1>
      <div className="products">
        <div className="product">
          <img
            src="products/product1.jpg"
            alt="Product 1"
            className="product-image"
          />
          <p className="product-details">Text</p>
          <button className="btn btn-dark" onClick={(e) => navigate("/products")}>Know More</button>
        </div>
        <div className="product">
          <img
            src="products/product1.jpg"
            alt="Product"
            className="product-image"
          />
          <p className="product-details">Text</p>
          <button className="btn btn-dark" onClick={(e) => navigate("/products")}>Know More</button>
        </div>
        <div className="product">
          <img
            src="products/product1.jpg"
            alt="Product"
            className="product-image"
          />
          <p className="product-details">Text</p>
          <button className="btn btn-dark" onClick={(e) => navigate("/products")}>Know More</button>
        </div>
        <div className="product">
          <img
            src="products/product1.jpg"
            alt="Product"
            className="product-image"
          />
          <p className="product-details">Text</p>
          <button className="btn btn-dark" onClick={(e) => navigate("/products")}>Know More</button>
        </div>
      </div>
    </div>
  );
}