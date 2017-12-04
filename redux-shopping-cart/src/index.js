import { createStore } from "redux";
import { combineReducers } from 'redux';

const reducer = function(state=[], action) {
  return state;
}

const store = createStore(reducer);


const productsReducer = function(state=[], action) {
  return state;
}

const cartReducer = function(state=[], action) {
  return state;
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);