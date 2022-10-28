import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../assets/Logo.png';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const HandleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Tech ED
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav className='d-flex align-items-center'>
                            <BsFillSunFill className='fs-5'></BsFillSunFill>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                className='mx-2'
                            />
                            <BsFillMoonFill></BsFillMoonFill>
                        </Nav>
                        <LinkContainer to='/'>
                            <Nav.Link>Courses</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/faq'>
                            <Nav.Link>Faq</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/blog'>
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                        <Nav.Link>
                            {
                                user?.photoURL && <OverlayTrigger
                                    key={'bottom'}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            {user.displayName}
                                        </Tooltip>
                                    }
                                >
                                    <Image roundedCircle style={{ height: '30px' }} src={user.photoURL}></Image>
                                </OverlayTrigger>

                            }
                        </Nav.Link>

                        {
                            user?.uid ? <LinkContainer to='/'>
                                <Nav.Link onClick={HandleLogOut}>Logout</Nav.Link>
                            </LinkContainer>
                                : <><LinkContainer to='/login'>
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                    <LinkContainer to='/signup'>
                                        <Nav.Link>Signup</Nav.Link>
                                    </LinkContainer></>

                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;