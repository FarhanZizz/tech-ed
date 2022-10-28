import React, { useEffect } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Sidenav = ({ categories }) => {

    return (
        <Nav className='flex-column my-5' justify variant="tabs" defaultActiveKey="/home">
            {
                categories.map(category =>
                    <LinkContainer key={category.id} className='mb-3' to={`/categories/${category.id}`}>
                        <Nav.Link>{category.name}</Nav.Link>
                    </LinkContainer>
                )
            }

            {/* <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item> */}
        </Nav>
    );
};

export default Sidenav;