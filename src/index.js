import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/container/Home.jsx';
import * as serviceWorker from './serviceWorker';
import MenuBar from './components/navbar/NavBar';
import Products from './components/products/Products';
import ItemCount from './components/products/product/ProductDesc';

ReactDOM.render(
  <>
  <MenuBar/>
    <Home/>
    <Products/>
    <ItemCount/>
    
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
