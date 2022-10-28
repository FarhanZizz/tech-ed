import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const courseDetails = useLoaderData();
    return (
        <div className='w-50 mx-auto text-center my-5'>
            <h2 className='fw-bold my-2'>Checkout Form</h2>
            <p>For Course: <strong>{courseDetails.title}</strong> </p>
            <form>
                <h4 className='text-start my-4'>Billing address</h4>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="Your Name" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingtext" label="Your Address">
                    <Form.Control type="text" placeholder="text" />
                </FloatingLabel>
                <Link className='btn btn-primary my-4' to='/'> Go to Home</Link>
            </form>

        </div>
    );
};

export default Checkout;