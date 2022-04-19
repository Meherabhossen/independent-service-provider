
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card className='shadow-lg' style={{ width: '18rem' }}>
                <Card.Img style={{ width: "100%" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Card.Text>
                        Detail: {description}
                    </Card.Text>
                    <Link to="/checkout">
                    <button className='btn btn-primary'>Book This Course</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;