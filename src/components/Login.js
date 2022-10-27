import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError('');
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    return (
        <Form onSubmit={handleLoginSubmit} className='w-50 mx-auto mt-5'>
            <Form.Text className=" text-danger d-block mb-3">
                {error}
            </Form.Text>
            <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Text className=" d-block mb-3">
                Don't have an account? <Link className='text-primary' to='/signup'>Signup Now</Link>
            </Form.Text>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;