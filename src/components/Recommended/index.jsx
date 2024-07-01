import React from "react";
import Product from "./Product";

import "./Recommended.css";

export default function Recommended(props) {
  const products = props.products;

  return (
    <div className="recommended">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}