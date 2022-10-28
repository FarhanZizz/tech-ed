import React from 'react';
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
        </Nav>
    );
};

export default Sidenav;