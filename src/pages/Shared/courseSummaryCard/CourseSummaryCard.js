import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course }) => {
    const { _id, classes, details, rating, duration } = course;
    console.log(course)
    return (
        <Container>
            <Row className=''>
                <Col>
                    <Link to={`/course/${_id}`}>
                        <Card>
                            <Card.Img style={{ height: '12rem' }} variant="top" src={classes.img} />
                            <Card.Body>
                                <Card.Title>{classes.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>





        // <Card md={2} className="mb-5 d-flex col-lg-4 shadow-lg p-3 mb-5 bg-body rounded  grid-container" style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={classes.img} />
        //     <Card.Body>
        //         <Card.Title>{classes.name}</Card.Title>
        //         <Card.Text>
        //             {
        //                 details.length > 150 ?
        //                     <p>{details.slice(0, 150) + '...'} <Link to={`/course/${_id}`}>Read More</Link>
        //                     </p> :
        //                     <p>{details}</p>
        //             }
        //         </Card.Text>
        //         <p>Duration : {duration}</p>
        //         <p>Price: {rating?.Price}</p>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>
    );
};

export default CourseSummaryCard;