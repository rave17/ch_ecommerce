import React, { useState, useEffect } from 'react';
import Title from '../../title/Title.jsx';
import imgExample from '../product/img/example.png';
import getProducts from '../../../utils/getProducts';
import { Container, Card, CardColumns, Button, Spinner } from 'react-bootstrap';





function Product({ product, imgProduct }) {

    return <>
            {product.map((p, idx) =>
        <Card>
            <Card.Img src={imgProduct} className="w-25" />
                <Card.Body key={p.id}>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Text className="my-auto text-success font-weight-bold">{p.price}</Card.Text>
                </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <Button>Comprar</Button>
                <Button>Ver Mas</Button>
            </Card.Footer>
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
    })

    return <>

        <Container className="my-3">
            {loading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>}
            <Title text="Products" />
            <CardColumns className="text-center">
                <Product imgProduct={imgExample} product={item} />
            </CardColumns>
        </Container>

    </>
}
export default Products;