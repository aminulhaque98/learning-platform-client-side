import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';

const Home = () => {
    // const allCourse = useLoaderData();
    return (
        <div>
            <h3>this is home page</h3>

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
        </div>
    );
};

export default Home;