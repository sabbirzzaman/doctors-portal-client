import React from 'react';
import Hero from './Hero';
import HomeServices from './HomeServices';
import InfoCard from './InfoCards';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <InfoCard></InfoCard>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;