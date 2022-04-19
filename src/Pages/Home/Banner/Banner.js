import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://static.boredpanda.com/blog/wp-content/uploads/2017/05/pink-flamingo-day-2017-59244c5df267f__880.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>We don't own the planet Earth, we belong to it.</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://photonify.com/wp-content/uploads/2019/01/elk-1024x683.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Look deep into nature, and then you will understand everything better</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://as1.ftcdn.net/v2/jpg/03/85/50/40/500_F_385504060_pPh72Db6z1IunZyO7E1nSzOpilgOifwN.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>The wildlife and its habitat cannot speak, so we must and we will.</h3>
                    <p> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;