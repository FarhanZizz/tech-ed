import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const ref = React.createRef();
    return (
        <Card className='w-75 mx-auto my-5' ref={ref}>
            <Card.Img className='w-50 mx-auto my-4' variant="top" src={courseDetails.image} />
            <Card.Body>
                <Card.Title>{courseDetails.title}</Card.Title>
                <Card.Text>
                    {courseDetails.description}
                </Card.Text>
                <Link to={`/checkout/${courseDetails.id}`} className='btn btn-primary' >Get premium Access</Link>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary m-2' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </Card.Body>
        </Card >
    );
};

export default CourseDetails;