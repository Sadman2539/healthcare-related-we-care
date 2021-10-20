import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import initializeAuthentication from '../Firebase/firebase.init';
import { useEffect, useState } from "react";

initializeAuthentication();
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle, signInUsingGithub } = useFirebase();


    // handleLogin function call 
    const handleLogin = (event) => {
        event.preventDefault();
    }
    // handleEmailChange function call 
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // handlePasswordChange function call 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div className="container w-50 ">
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Button onClick={signInUsingGoogle} >
                    Google Sign In
                </Button>
                <br />
                <Button onClick={signInUsingGithub} >
                    GitHub Sign In
                </Button>
                <br />
                <Link to="/signup">
                    Need a account?
                </Link>
            </Form>
        </div >
    );
};

export default Login;