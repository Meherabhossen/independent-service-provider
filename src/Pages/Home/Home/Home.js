import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TrainerInfo from '../TrainerInfo/TrainerInfo';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <TrainerInfo></TrainerInfo>
        </>
    );
};

export default Home;