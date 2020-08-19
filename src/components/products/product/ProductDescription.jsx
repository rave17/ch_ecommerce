import React, {useEffect, useState} from 'react';
import getProducts from '../../../utils/getProducts';
import { Row, Spinner, Container, CardColumns } from 'react-bootstrap';

function ProductDescription({item}){    
    const[itemDescription, setItemDescription] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("the item is: " + itemDescription)

    useEffect(()=>{
        console.log("get info item");
        getProducts().then(res => {
            setItemDescription(res);
            setLoading(false);
    })
}, []);

    return <>
        <Row className="mx-0 border bg-dark">{loading && <Spinner className="mx-auto mb-4" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>}</Row>
        <Container className="my-5">
            <CardColumns className="text-center">
                <p>{item}</p>
            </CardColumns>
        </Container>
    </>
}

export default ProductDescription;