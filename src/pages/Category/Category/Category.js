import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/courseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h3>this is category component: {categoryCourse.length}</h3>
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