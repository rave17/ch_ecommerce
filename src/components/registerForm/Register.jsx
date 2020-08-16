import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';



function InputForm({ label, name }) {
    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" placeholder={label} name={name} />
        </>
    )
}

function RegisterModal(props) {

    const [newUser, setNewUser] = useState({ name: "", lastname: "", email: "", password: "" });

    const handleChange = (attr) => (event) => setNewUser({ ...newUser.event.target });

    function registerUser() {
        console.log('register')
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-5">
                <Form.Group>
                    <InputForm label="Name" name="name" onChange={handleChange("name")} />
                    <InputForm label="Lastname" name="lastname" onChange={handleChange("lastname")} />
                    <InputForm label="Email" name="email" onChange={handleChange("email")} />
                    <InputForm label="Password" name="password" onChange={handleChange("password")} />
                    <InputForm label="Confirm Password" name="confirmPass" onChange={handleChange("confirmPass")} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="outline-danger">Cancel</Button>
                <Button onClick={registerUser} variant="outline-primary">Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RegModal() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Register
        </Button>

            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


function Register() {
    return <RegModal />
}

export default Register;