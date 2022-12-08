import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategory(data));
    })

    return (
        <div>
            <h4>All Category!</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;