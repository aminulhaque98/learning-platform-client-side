import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';
import SideNav from '../../Shared/SideNav/SideNav';

const Course = () => {
    const allCourse = useLoaderData();

    return (

        <div>
            <Container>
                <Row >
                    <Col lg="2" className='d-none d-lg-block'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="10">
                        <h2>All Courses Our!</h2>
                        <Row sm={1} md={2} lg={3}>
                            {
                                allCourse.map(course =>
                                    <Col className="g-3 mb-3 bg-body rounded">
                                        <CourseSummaryCard
                                            key={course._id}
                                            course={course}
                                        ></CourseSummaryCard>
                                    </Col>
                                )
                            }
                        </Row>

                    </Col>

                </Row>
            </Container>
        </div>

    );
};

export default Course;