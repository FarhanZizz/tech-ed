import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { login, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const HandleGithubSignIn = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    const HandleGoogleSignIn = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }


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
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <div className='text-center'>
                <Button onClick={HandleGoogleSignIn} className='me-2' variant="outline-dark" ><BsGoogle className=''></BsGoogle> Sign in With Google</Button>
                <Button onClick={HandleGithubSignIn} variant="outline-dark" > <BsGithub></BsGithub> Sign in With Github</Button>
                <hr />
            </div>
            <Form onSubmit={handleLoginSubmit} >
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
        </div >
    );
};

export default Login;