import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';

const Course = () => {
    const allCourse = useLoaderData();

    return (

        <div>
            <h2>All Courses Our</h2>

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
            </Container>
        </div>

    );
};

export default Course;