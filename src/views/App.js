import React from 'react';
import MenuBar from '../components/navbar/NavBar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Home from '../components/container/Home.jsx';
import Products from '../components/productsList/Products.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DescriptionContainer from '../components/product/ProductDescriptionContainer.jsx';

function App() {
    return (
        <BrowserRouter>
            <MenuBar />
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route exact path="/products" >
                    <Products/>
                </Route>
                <Route path="/product/detail/:id">
                    <DescriptionContainer />
                </Route>
                <Route exact path="/contact" >
                    <p>contact</p>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>

    )
}
export default App;