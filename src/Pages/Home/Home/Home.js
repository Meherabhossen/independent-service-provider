import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TrainerInfo from '../TrainerInfo/TrainerInfo';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TrainerInfo></TrainerInfo>
            <Services></Services>
        </>
    );
};

export default Home;