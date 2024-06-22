import React, { useState } from 'react';
import '../styles/productcard.css';

function ProductCard({ product }) {
  const [addedToCart, setAddedToCart]=useState(false);
  const addToCart=(productId)=>{
      fetch(`${process.env.REACT_APP_BACKEND_API}/carts`,{
        method:"POST",
        body:JSON.stringify(
          {
              userId:process.env.REACT_APP_USER_ID,
              date:new Date(),
              products:[{productId,quantity:1}]
          })
    })
        .then(res=>res.json())
        .then(json=>(json))
  }
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-rating-price">
          <span className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
          <span className="product-price">${product.price}</span>
        </div>
        <button className={`add-to-cart-button ${addedToCart?"added-to-cart":""}`} onClick={()=>{
          addToCart(product.id)
          setAddedToCart(true)
        }} disabled={addedToCart}>{addedToCart?"Added":"Add"} to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;