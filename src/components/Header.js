import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../assets/Logo.png';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Tech ED
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav className='d-flex align-items-center flex-nowrap'>
                            <BsFillSunFill className='fs-5'></BsFillSunFill>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                className='mx-2'

                            />
                            <BsFillMoonFill></BsFillMoonFill>
                        </Nav>
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;