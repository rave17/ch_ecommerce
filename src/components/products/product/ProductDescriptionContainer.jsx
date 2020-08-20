import React, { useState, useEffect } from 'react';
import getProducts from '../../../utils/getProducts';
import { Card, Spinner } from 'react-bootstrap';

function DescriptionContainer({ itemDescription }) {

    const [description, setDescription] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(`the item is: ${description}`)

    useEffect(() => {
        console.log("get info item");
        getProducts().then(res => {
            setDescription(res);
            setLoading(false);
        })
    }, []);

    return <>
        <Card>
        {loading && <Spinner className="mx-auto mb-4" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>}
            <Card.Body>
                <Card.Text>
                    {itemDescription}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default DescriptionContainer;