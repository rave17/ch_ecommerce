import React, {useEffect, useState} from 'react';
import { Row, Spinner, Container, CardColumns, Card, Button } from 'react-bootstrap';

function ProductDescription({item}){    

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('loading item description...')
       setLoading(false)
    }, [])

    return <>
        <Row className="mx-0 border bg-dark">{loading && <Spinner className="mx-auto mb-4" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>}</Row>
        <Container className="my-5">
            <CardColumns className="text-center">
                <Card.Text>{item}</Card.Text>    
           <Button>Comprar</Button>
            </CardColumns>
        </Container>
    </>
}

export default ProductDescription;