import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    const { _id, classes, details, rating, duration } = course;
    return (

        <Card md={2} className="shadow-lg p-3 mb-5 bg-body rounded  grid-container">
            <Card.Img variant="top" src={classes.img} />
            <Card.Body>
                <Card.Title>{classes.name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <p>Duration : {duration}</p>
                <p>Price: {rating?.Price}</p>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Course;