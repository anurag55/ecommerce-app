import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, selectCartItem } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector(state => selectCartItem(state, product.id));
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigating to product details
    dispatch(addToCart(product));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
  };

  const handleIncrement = (e) => {
    e.stopPropagation(); // Prevent navigating to product details
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = (e) => {
    e.stopPropagation(); // Prevent navigating to product details
    dispatch(decrementQuantity(product.id));
  };

  return (
    <div className="product" key={product.id}>
      <img src={product.image} className='product-image' alt={product.title} />
      <p className='product-details'>{product.title}</p>
      <p className='text-center'>Rs. {product.price}</p>
      {cartItem ? (
        <div className='d-flex justify-content-center'>
          <button className='custom-button' onClick={(e) => handleDecrement(e, product)}>-</button>
          <span className='product-count'>{cartItem.quantity}</span>
          <button class="custom-button" onClick={(e) => handleIncrement(e, product)}>+</button>
        </div>
      ) : (
        <button className="btn btn-dark" onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button>
      )}
      {showNotification && <div className="notification">Product added to cart!</div>}
     </div>
  );
};

export default Product;