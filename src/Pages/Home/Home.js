import React from 'react';
import Appointment from './Appointment';
import DentalCare from './DentalCare';
import Hero from './Hero';
import HomeServices from './HomeServices';
import InfoCard from './InfoCards';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <InfoCard></InfoCard>
            <HomeServices></HomeServices>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;