import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div className='w-50' style={{ height: '30rem', width: '30rem', alignItems: 'center' }}>
            {/* <h3>Course Category!</h3> */}

            {
                categoryCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Category;