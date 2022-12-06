import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>this is Home component: {allCourse.length}</h2>

            <div>
                {
                    allCourse.map(course => <CourseSummaryCard
                        key={course._id}
                        course={course}
                    ></CourseSummaryCard>)
                }
            </div>

        </div>
    );
};

export default Home;