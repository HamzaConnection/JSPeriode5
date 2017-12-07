import store from './store.js';
import { addToCart }  from './actions/cart-actions';
import { deleteFromCart } from './actions/cart-actions';
import { updateCart }  from './actions/cart-actions';


let unsubscribe = store.subscribe(() =>
  console.log(store.getState().shoppingCart)
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));


// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const App = <h1>Redux Shopping Cart</h1>;

ReactDOM.render(
  <Provider store={store}>
    { App }
  </Provider> ,
  document.getElementById('root')
);
*/