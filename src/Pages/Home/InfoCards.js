import React from 'react';
import InfoCard from './InfoCard';
import {
    faClock,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const InfoCards = () => {
    return (
        <section>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                <InfoCard
                    icon={faClock}
                    title={'Opening Hours'}
                    info={'Lorem Ipsum is simply dummy'}
                    bg={'bg-gradient-to-r from-secondary to-accent'}
                ></InfoCard>
                <InfoCard
                    icon={faLocationDot}
                    title={'Visit our location'}
                    info={'Brooklyn, NY 10036, United States'}
                    bg={'primary'}
                ></InfoCard>
                <InfoCard
                    icon={faPhone}
                    title={'Contact us now'}
                    info={'+000 123 456789'}
                    bg={'bg-gradient-to-r from-secondary to-accent'}
                ></InfoCard>
            </div>
        </section>
    );
};

export default InfoCards;
