import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-form">
            <h2>Get in Touch</h2>
            <Form className="container">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="text" placeholder="your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="email" placeholder="youremail@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button>Submit</button>
            </Form >
        </div >
    );
};

export default Contact;