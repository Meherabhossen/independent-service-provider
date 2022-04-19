import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center'>
            <p><strong>Copyright <span><img style={{width: '18px'}} src="https://www.freepnglogos.com/uploads/copyright-png/copyright-logo-png-clipart-best-5.png" alt="" /></span> {year}</strong></p>
        </footer>
    );
};

export default Footer;