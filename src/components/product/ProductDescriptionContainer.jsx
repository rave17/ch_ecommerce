import React, { useState, useEffect } from 'react';
import getProducts from '../../utils/getProducts';
import { Card, Spinner, Row } from 'react-bootstrap';
import ProductDescription from './ProductDescription';

function DescriptionContainer({ children }) {

    const [description, setDescription] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(`the item is: ${description}`)

    useEffect(() => {
        console.log("get info item");
        getProducts().then(res => {
            setDescription(res[0]);
            setLoading(false);
            console.log(res[0])
        })
    }, []);

    return <>
        
        <Row className="mx-auto">
        {loading && <Spinner className="mx-auto mb-4" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>}
            <Card>
                    <ProductDescription itemTitle={description.name} itemDescription={description.longDescription}/>
            </Card>
            </Row>
    </>
}

export default DescriptionContainer;