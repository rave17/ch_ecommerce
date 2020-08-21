import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductDescription({itemTitle, itemDescription}){    

    return <>
       
        <Card.Body className="mx-auto">
            <Card.Title>{itemTitle}</Card.Title>
                <Card.Text>{itemDescription}</Card.Text>    
           <Button>Comprar</Button>
        </Card.Body>
    </>
}

export default ProductDescription;