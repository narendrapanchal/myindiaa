import React, { useEffect ,useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getCartProducts, getProducts} from "../Redux/ProductReducer/action"
import ProductCard from '../components/ProductCard';
import "../styles/cart.css"
import CartBox from '../components/CartBox';
function Cart() {
    const dispatch=useDispatch();
    const [cartList,setCartList]=useState([]);
    const {cart,products}=useSelector(store=>store.product,shallowEqual);
    useEffect(()=>{
      dispatch(getCartProducts(process.env.React_APP_User_Id));
      dispatch(getProducts());
    },[]);
    
    useEffect(()=>{
      if(products&&cart){
        const list=products?.filter((product)=>{
        let check =false;
        cart[0]?.products?.forEach(element => {
  
          if(element.productId==product.id){
            product.quantity=element.quantity;
            check=true;
          }
        });
        return check
      })
      setCartList(list);
    }
    },[products,cart])
    const totalPrice = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className='carts'>
      {cartList.map((cart,index)=><CartBox key={index+"." + cart.name}cart={cart}/>)}
      <div className="cart-footer">
                <div className="total-price">Total: ${totalPrice}</div>
                <button className="checkout-button">Checkout</button>
            </div>
    </div>
  )
}

export default Cart
