import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, body, image, price, id } = props.service;
    return (

        <Col>
            <Card className="service">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Link to={`/service-details/${id}`}>
                        <button>Details</button>
                    </Link>
                </Card.Body>

            </Card>
        </Col>

    );
};

export default Service;