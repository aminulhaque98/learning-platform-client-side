import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark text-light mt-10' style={{ minHeight: '' }}>
            <div className='pt-20' style={{ justifyContent: 'center', textAlign: 'center' }}>
                <p >copyright <FaRegCopyright></FaRegCopyright> 2022 Education master All rights reserved</p>
            </div>

        </div>
    );
};

export default Footer;