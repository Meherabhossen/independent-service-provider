import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('trainer.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container mt-5'>
            <h2 className='text-center my-3'> Services of Robinho The Fitness Trainer Academy</h2>
            <div className='row'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;