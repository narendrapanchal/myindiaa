import React, { useState } from 'react';
import '../styles/cartbox.css';


const CartBox = ({cart}) => {


    const totalPrice = (cart.price * cart.quantity).toFixed(2);

    return (
        <div className="cart-box">
            <img src={cart.image} alt="Product" className="cart-image" />
            <div className="cart-content">
                <div className="cart-category">Category: {cart.category}</div>
                <div className="cart-description">{cart.description}</div>
                <div className="cart-price">Price: ${cart.price}</div>
                <div className="cart-quantity">
                    Quantity: 
                    <button  className="quantity-button">-</button>
                    {cart.quantity}
                    <button  className="quantity-button">+</button>
                </div>
                <div className="cart-total-price">Total: ${totalPrice}</div>
            </div>
        </div>
    );
};

export default CartBox;
