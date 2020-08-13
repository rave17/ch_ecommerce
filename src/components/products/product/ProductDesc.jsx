import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';
import infoProduct from './product.json'
import { Container, Button } from 'react-bootstrap';


function ItemCount(){

const [quantity, setQuantity] = useState( infoProduct.productItem.stock )

useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log( `remain ${quantity} items of this product` );
  }, [quantity]);

const addItem = ()=>{
    setQuantity(quantity+1)
    console.log('item added ' + quantity)
    return quantity;
}

const supItem = ()=>{
    setQuantity(quantity - 1)

    console.log('item sup ' + quantity)
    return quantity;
}

    return(
   
        <Container className="col-md-4 my-3">
            <Product/>
            <div className="row d-flex justify-content-around mx-auto my-3">
                <Button variant="primary" onClick={supItem}  disabled={1 >= quantity} >-</Button>
    <p>UNIT: {quantity}</p>
                <Button variant="primary" onClick={addItem} disabled={4 <= quantity}>+</Button>
            </div>    
        <Button type= "button" variant="outline-primary" className="btn btn-block">Primary</Button>
        </Container>
        
    )

}

export default ItemCount;