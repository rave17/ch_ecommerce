import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import emptyImg from '../product/img/example.png';
import product from './product.json';

function Product(){

const price = ()=> {
    if(product){
        console.log(product.productItem)
    }
}
    return(
        <>
        
            <Card>
                <CardImg variant="top" src={emptyImg} className="mx-auto w-75"/>
                <hr/>
                <Card.Title className="mx-auto">Example</Card.Title>
                <Card.Body className="d-flex justify-content-around">
    <Card.Subtitle className=""  onClick={price()}>{product.productItem.name}</Card.Subtitle>
                    
    <Card.Text>{product.productItem.price}</Card.Text>

                </Card.Body>
            </Card>
      
        </>
    )
}

export default Product;