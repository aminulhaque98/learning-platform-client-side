import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
    const course = useLoaderData();
    const { classes, details, rating, duration } = course;

    return (
        <Card className="shadow-lg p-3 mb-5 rounded bg-body text-success">
            <Card.Img variant="top" src={classes?.img} />
            <Card.Body>

                <Card.Title>{classes?.name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Card.Text>Duration : {duration}</Card.Text>
                <Card.Text>published : {classes?.published_date}</Card.Text>
                <Card.Text>rating : {rating?.number} <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaRegStar></FaRegStar></Card.Text>
            </Card.Body>
        </Card>


    );
};

export default PremiumCourse;