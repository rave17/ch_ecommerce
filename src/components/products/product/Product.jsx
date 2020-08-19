import React, { useState, useEffect } from 'react';
import Title from '../../title/Title.jsx';
import imgExample from '../product/img/example.png';
import getProducts from '../../../utils/getProducts';
import { Container, Card, CardColumns, Button, Spinner, Row } from 'react-bootstrap';
import ProductDescription from './ProductCount.jsx';


function Product({ product, imgProduct }) {

    return <>
        {product.map((p, idx) =>
            <Card key={p.id}>
                <Card.Img src={imgProduct} className="w-25" />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Text className="my-auto text-success font-weight-bold">{p.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <Button variant="outline-info">Buy</Button>
                    <Button>See More</Button>
                </Card.Footer>
                    <ProductDescription/>
            </Card>)}
    </>
}

function Products() {

    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        console.log("getting products");
        getProducts().then(res => {
            setItems(res);
            setLoading(false);
        })
    }, [])

    return <>

        <Title text="Products" />
        <Row className="mx-0">{loading && <Spinner className="mx-auto mb-4" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>}</Row>
        <Container className="my-5">
            <CardColumns className="text-center">
                <Product imgProduct={imgExample} product={item} />
            </CardColumns>
        </Container>

    </>
}
export default Products;