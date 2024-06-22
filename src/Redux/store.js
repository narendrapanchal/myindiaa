import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { reducer as productReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({product:productReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
