import React from 'react';
import Appointment from './Appointment';
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
            <Appointment></Appointment>
        </div>
    );
};

export default Home;