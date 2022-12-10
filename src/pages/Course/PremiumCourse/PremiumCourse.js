import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
    const course = useLoaderData();
    const { classes, details, rating, duration } = course;

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'a.pdf';
                alink.click();
            })
        })
    }



    return (
        // <Card className="shadow-lg p-3 mb-5 rounded bg-body text-success">
        //     <Card.Img variant="top" src={classes?.img} />
        //     <Card.Body>

        //         <Card.Title>{classes?.name}</Card.Title>
        //         <Card.Text>
        //             {details}
        //         </Card.Text>
        //         <Card.Text>Duration : {duration}</Card.Text>
        //         <Card.Text>published : {classes?.published_date}</Card.Text>
        //         <Card.Text>rating : {rating?.number} <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaRegStar></FaRegStar></Card.Text>
        //     </Card.Body>
        // </Card>


        <center>
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
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </Card>

        </center>




    );
};

export default PremiumCourse;