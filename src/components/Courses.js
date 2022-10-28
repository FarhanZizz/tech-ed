import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courselist from './Courselist';
import Sidenav from './Sidenav';

const Courses = () => {
    const selected_courses = useLoaderData();
    const [categories, setCategories] = useState([]);
    const [allCourses, setallCourses] = useState([]);

    useEffect(() => {
        fetch('https://tech-ed-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, []);
    useEffect(() => {
        fetch('https://tech-ed-server.vercel.app/')
            .then(res => res.json())
            .then(allData => setallCourses(allData))

    }, []);
    return (
        <Container>
            <Row>
                <Col sm={4}> <Sidenav categories={categories}></Sidenav> </Col>
                <Col sm={8}> <Courselist allCourses={allCourses} selected_courses={selected_courses}></Courselist> </Col>
            </Row>
        </Container>
    );
};

export default Courses;