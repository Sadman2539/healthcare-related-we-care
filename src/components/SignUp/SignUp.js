import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import useFirebase from '../../Hooks/useFirebase';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { signInUsingGoogle, signInUsingGithub, createUserUsingEmail } = useFirebase();

    // handleLogin function call 
    const handleSignUp = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            return;
        }
        createUserUsingEmail(name, email, password);
    }
    // handleEmailChange function call 
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // handleEmailChange function call 
    const handleNameChange = e => {
        setName(e.target.value)
    }
    // handlePasswordChange function call 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className="container w-50">
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button> <br />
                <Button onClick={signInUsingGoogle} >
                    Google Sign In
                </Button>
                <br />
                <Button onClick={signInUsingGithub} >
                    GitHub Sign In
                </Button>
                <br />
                <Link to="/login">
                    Already have an account?
                </Link>
            </Form>
        </div>
    );
    return {
        email, password, name
    }
};

export default SignUp;