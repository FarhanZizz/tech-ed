import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    return (
        <Card>
            <Card.Img className='w-25 mx-auto my-4' variant="top" src={courseDetails.image} />
            <Card.Body>
                <Card.Title>{courseDetails.title}</Card.Title>
                <Card.Text>
                    {courseDetails.description}
                </Card.Text>
                <Link to={`/checkout/${courseDetails.id}`} className='btn btn-primary' >Get premium Access</Link>
            </Card.Body>
        </Card >
    );
};

export default CourseDetails;