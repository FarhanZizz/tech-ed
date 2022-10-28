import React from 'react';
import { Link } from 'react-router-dom';

const ErrorRoute = () => {
    return (
        <div className='w-50 mx-auto text-center'>
            <h2 className='my-5 fw-bold '>ERROR 404</h2>
            <h4 className='my-4'>Seems like you typed a invalid URL</h4>
            <Link className='btn btn-primary' to='/'>Go to Home</Link>
        </div>
    );
};

export default ErrorRoute;