import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getProducts} from "../Redux/ProductReducer/action"
import ProductCard from '../components/ProductCard';
import "../styles/products.css"
function Products() {
    const dispatch=useDispatch();
    const {products}=useSelector(store=>store.product,shallowEqual);
    useEffect(()=>{
      dispatch(getProducts());
    },[])
  return (
    <div className='products'>
{products?.map((ele)=><ProductCard key={ele.id} product={ele}/>)}
    </div>
  )
}

export default Products
