import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Courselist = ({ selected_courses, allCourses }) => {

    return (
        <Row xs={1} md={2} className="g-4 my-4">
            {selected_courses
                && selected_courses.map(course => (
                    <Col key={course.id}>
                        <Card>
                            <Card.Img className='w-50 mx-auto my-4' variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.short_description}
                                </Card.Text>
                                <Link to={`/courses/${course.id}`} className='btn btn-primary' >View Course Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            {
                !selected_courses && allCourses.map(course => (
                    <Col key={course.id}>
                        <Card>
                            <Card.Img className='w-50 mx-auto my-4' variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.short_description}
                                </Card.Text>
                                <Link to={`/courses/${course.id}`} className='btn btn-primary' >View Course Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }


        </Row>
    )
};

export default Courselist;