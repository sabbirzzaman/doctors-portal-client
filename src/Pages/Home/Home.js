import React from 'react';
import DentalCare from './DentalCare';
import Hero from './Hero';
import HomeServices from './HomeServices';
import InfoCard from './InfoCards';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <InfoCard></InfoCard>
            <HomeServices></HomeServices>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;