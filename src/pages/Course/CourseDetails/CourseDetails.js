import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, classes, details, rating, duration } = course;

    return (
        <Card md={2} className="shadow-lg p-3 mb-5 bg-body text-dark rounded  grid-container">
            <Card.Img variant="top" src={classes.img} />
            <Card.Body>
                <Card.Title>{classes.name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <p>Duration : {duration}</p>
                <p>Price: {rating?.Price}</p>
                <Link to={`/premium/${_id}`}> <Button variant="primary">Get premium access</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;