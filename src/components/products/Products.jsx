import React from 'react'
import { Container, CardDeck } from 'react-bootstrap'
import Product from './product/Product.jsx'


function Products(){

    return(
        
        <Container>
            <CardDeck>
                <Product />
                <Product />
                <Product />
            </CardDeck>
        </Container>
        
    )
}

export default Products;