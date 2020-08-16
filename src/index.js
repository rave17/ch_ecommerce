import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/container/Home.jsx';
import * as serviceWorker from './serviceWorker';
import MenuBar from './components/navbar/NavBar.jsx';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <>
    <MenuBar/>
    <Home/>
    <Footer/>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
