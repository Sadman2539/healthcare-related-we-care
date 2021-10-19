import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="#home" className="d-flex">
                        Emergency Contact
                    </Navbar.Brand>

                    <Navbar.Text >
                        <FontAwesomeIcon icon="coffee" />
                    </Navbar.Text>
                    <Navbar.Text >
                        <Stack direction="horizontal" gap={3}>
                            <div>
                                <i class="fas fa-phone me-2" ></i>
                                123456789</div>
                            <div>
                                <i class="fas fa-envelope me-2"></i>
                                wecare@gmail.com</div>
                            <div>
                                <i class="fas fa-calendar-check me-2"></i>
                                24/7 Online Support</div>
                        </Stack>
                    </Navbar.Text>

                </Container>
            </Navbar>


            <div className="welcome-section">
                <Navbar variant="success">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;