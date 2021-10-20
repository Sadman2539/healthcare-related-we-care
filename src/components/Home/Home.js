import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Link>
                        <button>More Services</button>
                    </Link>

                </div>
            </div>

        </>
    );
};
export default Home;