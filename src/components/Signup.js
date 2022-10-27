import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { singUpWithEmailPassword } = useContext(AuthContext);

    const handleEmailPasswordSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singUpWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError('');
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <Form onSubmit={handleEmailPasswordSignUp} className='w-50 mx-auto mt-5'>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <Form.Group className="my-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicPhoto">
                <Form.Label>Photo </Form.Label>
                <Form.Control type="text" name="photo" placeholder="Enter PhotoURL" />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Text className=" d-block mb-3">
                Already have an account? <Link className='text-primary' to='/login'>Login Now</Link>
            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Signup;