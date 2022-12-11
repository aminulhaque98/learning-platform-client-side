import React from 'react';
import './PremiumCourse.css';
import { FaStar, FaRegStar, FaDownload } from 'react-icons/fa';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


const PremiumCourse = () => {
    const course = useLoaderData();
    const { classes, details, rating, duration } = course;
    const ref = useRef();


    return (

        <div className="print">

            <div>
                <div ref={ref}>
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
                </div>
            </div>
            <ReactToPrint className="align-middle alignRight" trigger={() => <Button >Download PDF <FaDownload></FaDownload></Button>} content={() => ref.current} />
        </div>



    );
};

export default PremiumCourse;