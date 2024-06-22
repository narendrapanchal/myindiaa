import {FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_CART_FAILURE,FETCH_CART_REQUEST,FETCH_CART_SUCCESS} from "./actionTypes"
export const getProducts = () =>async(dispatch) =>{
try{
  dispatch({type:FETCH_PRODUCT_REQUEST});
  const response=await fetch(`${process.env.REACT_APP_BACKEND_API}/products/`)
  const data=await response.json();
  if(!response.ok){
    throw new Error("Something went wrong");
  }
  dispatch({type:FETCH_PRODUCT_SUCCESS,payload:data});
}catch(err){
dispatch({type:FETCH_PRODUCT_FAILURE,payload:err.message})
}
};
export const getCartProducts = () =>async(dispatch) =>{
  try{
    dispatch({type:FETCH_CART_REQUEST});
    const response=await fetch(`${process.env.REACT_APP_BACKEND_API}/carts/user/${process.env.React_APP_User_Id}`);
    const data=await response.json();
    if(!response.ok){
      throw new Error("Something went wrong");
    }
    dispatch({type:FETCH_CART_SUCCESS,payload:data});
  }catch(err){
  dispatch({type:FETCH_CART_FAILURE,payload:err.message})
  }
  };
