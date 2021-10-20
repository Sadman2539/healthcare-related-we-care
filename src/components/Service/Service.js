import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, body, image, price, id } = props.service;
    return (

        <Col>
            <Card className="service">
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <NavLink to={`/service-details/${id}`}>
                        <button className="regular-btn">Details</button>
                    </NavLink>
                </Card.Body>

            </Card>
        </Col>

    );
};

export default Service;