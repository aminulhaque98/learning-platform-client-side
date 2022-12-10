import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';

const Home = () => {
    // const allCourse = useLoaderData();
    return (

        <Container>
            <Row>
                <Col lg="6" className='shadow-lg p-3 rounded'>
                    <h1>
                        Launch Your Web Development Career With Education Master!
                    </h1>
                    <p>Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills</p>
                </Col>

                <Col lg="6">
                    <Card.Img className="shadow-lg p-3 rounded ms-10" style={{ height: '25rem' }} src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/07/react-enable-dark-mode-tutorial.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Card image" />
                </Col>
            </Row>


            {/* <h2>All Courses Our</h2>

            <Container>
                <Row sm={1} md={2} lg={3}>
                    {
                        allCourse.map(course =>
                            <Col className="shadow-sm p-3 g-3 mb-3 bg-body rounded">
                                <CourseSummaryCard
                                    key={course._id}
                                    course={course}
                                ></CourseSummaryCard>
                            </Col>
                        )
                    }

                </Row>
            </Container> */}


        </Container>

    );
};

export default Home;