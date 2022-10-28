import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='my-5'>
            <h2 className='fw-bold text-center my-5'>Frequently Asked Questions</h2>
            <Accordion className='w-50 mx-auto' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1. Do we accept online payment system?</Accordion.Header>
                    <Accordion.Body>
                        Yes, We have all type of online payment system. You can easily purchase out course to use bKash, Nogod, Rocket, Upay etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q2. Do we provide online support?</Accordion.Header>
                    <Accordion.Body>
                        Yes, We Provide online support. If you face any problem or error doing your courses, You can join our support system and solve your problem from our experience support mentors.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q3. Without education background, Can I get benefit from is courses?</Accordion.Header>
                    <Accordion.Body>
                        Of course. It's 21st centure. This skills give divided you from others. Also the job fields. You earn money by doing freelancing.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q4. Do you provide support after completing course?</Accordion.Header>
                    <Accordion.Body>
                        Yes, We try to provide that, But not perfectly. Always new student join our course. So its hard to provide everyone same support. But we try our level best to provide supports to everyone.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Q5. What we need to start?</Accordion.Header>
                    <Accordion.Body>
                        Don't need large amount o computer knowledge. You have to set your mentality. Have to work hard. Determine on courses. Try to follow the guideline. Have to know basic computer skills. Thats it.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;