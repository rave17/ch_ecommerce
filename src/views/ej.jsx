import React from 'react';
import MenuBar from '../components/navbar/NavBar';
import Home from '../components/container/Home';
import Products from '../components/products/product/Product.jsx'
import { Browser as Router, Route, Switch} from 'react-router-dom';

function App(){
    return (
        <Router>
        <>
            <MenuBar/>
            <Route path="/" component={Home}/>
            <Route path="contact" component={Products}/>
        </>
        </Router>
        
    )
}