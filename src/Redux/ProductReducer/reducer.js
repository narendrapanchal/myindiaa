import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE,FETCH_CART_FAILURE,FETCH_CART_REQUEST,FETCH_CART_SUCCESS} from "./actionTypes";
export const initState={
    isLoading: false,
    isError: false,
    products: [],
    cart:[],
  }
  
export  const reducer=(state=initState,action)=>{
switch (action.type) {
  case FETCH_PRODUCT_REQUEST:
    return { ...state, isLoading: true, isError: false };
  case FETCH_PRODUCT_SUCCESS:
    return { ...state, isLoading: false, products: action.payload };
  case FETCH_PRODUCT_FAILURE:
    return { ...state, isError: action.payload, isLoading: false };
  case FETCH_CART_REQUEST:
    return { ...state, isLoading: true, isError: false };
  case FETCH_CART_SUCCESS:
    return { ...state, isLoading: false, cart: action.payload };
  case FETCH_CART_FAILURE:
    return { ...state, isError: action.payload, isLoading: false };
  default:
    return state;
}
}