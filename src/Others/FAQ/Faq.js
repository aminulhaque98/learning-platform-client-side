import React from 'react';
import { FaClock } from 'react-icons/fa';

const Faq = () => {
    return (
        <div>

            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h3>What is the tutorial's duration?</h3>
                <p>
                    approximately 5-6 month
                </p>
            </div>

            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h3>Support time per day</h3>
                <p>
                    <p> <FaClock></FaClock> At morning 11 am - 1.00 pm </p>
                    <p> <FaClock></FaClock> At evening (4-6) pm</p>
                    <p> <FaClock></FaClock> At night (9-11) pm</p>


                </p>
            </div>

            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h3>Assignment's</h3>
                <p>
                    Every student must do 12 assignment ,and per assignment should be average marks 50% .
                </p>
            </div>

            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <h3>Our team for support</h3>
                <p>
                    We have team of 300 members for support
                </p>
            </div>

        </div>
    );
};

export default Faq;