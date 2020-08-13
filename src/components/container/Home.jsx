import React from 'react';
import './App.css';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../login/Login';


function Home({ content }) {
  console.log(content)
  return (
    <Container className="Container App d-flex justify-content-between my-3">
      <Jumbotron className="col-md-8">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
  </p>
        <p>
          <Button variant="primary">Best Products</Button>
        </p>
      </Jumbotron>
      <Login/>
    </Container>
  );
}

export default Home;
