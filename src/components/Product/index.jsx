import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './../../store/productSlice';


import "./Product.css";
import Recommended from "../Recommended";

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);
  return (
    <div className="product">
      {productStatus === 'loading' && <div>Loading...</div>}
      {productStatus === 'failed' && <div>{error}</div>}
      {productStatus === 'succeeded' && (
        <Recommended products={products} />
      )}
    </div>
  )
}