import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course }) => {
    const { _id, classes, details, rating, duration } = course;

    return (
        <Container>
            <Row className=''>
                <Col>
                    <Link to={`/details/${_id}`}>
                        <Card className="shadow-lg p-3 rounded ">
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

    );
};

export default CourseSummaryCard;