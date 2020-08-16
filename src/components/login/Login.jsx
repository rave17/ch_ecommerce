import React from 'react'
import { Form, Button } from 'react-bootstrap'
import login from '../../utils/login'

function Login() {

    


    return (
        <>
        
            <Form className="col-md-3 mx-auto">
                <Form.Text className="display-4 text-center mb-4">Welcome</Form.Text>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" name="emailLog" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="passLog" />
                    <small className="text-muted"><a href="forgotuser">Forgot your password?</a></small>
                <Button className="btn-block mt-3" onClick={login} variant="primary" type="submit">
                    Login
                </Button>
                </Form.Group>
            </Form>

        </>
    )

}

export default Login;
