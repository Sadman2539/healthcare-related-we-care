import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
const PageNotFound = () => {
    return (
        <div>
            <img className='w-100 ' src={notFound} alt="" />
            <Link to='/home'>
                <button className="regular-btn">Go to Home</button>
            </Link>
        </div>

    );
};

export default PageNotFound;