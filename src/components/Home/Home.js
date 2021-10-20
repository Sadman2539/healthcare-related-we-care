import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Service from '../Service/Service';

import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="welcome-section" id="home">
                <div className="welcome-content">
                    <h1 >Best Elder Care In Town</h1>
                    <button className="regular-btn">
                        Learn More
                        <span><i class="fas fa-arrow-right ms-2" ></i></span>
                    </button>
                </div>
            </div>

            {/* our services section  */}
            <div className="services">
                <div className="container mt-5">
                    <h1 className="text-center">Our Services</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.slice(0, 6).map(service => <Service key={service.id} service={service}></Service>)
                        }


                    </Row>
                    <NavLink to="/services">
                        <button className="regular-btn m-3 mx-auto">More Services
                            <span><i class="fas fa-arrow-right ms-2"></i></span>
                        </button>
                    </NavLink>

                </div>
            </div>

        </>
    );
};
export default Home;