import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import HomeService from './HomeService';

const HomeServices = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description:
                'Lorem Ipsum is simply dummy printing and typesetting in dust Ipsum has been the',
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description:
                'Lorem Ipsum is simply dummy printing and typesetting in dust Ipsum has been the',
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description:
                'Lorem Ipsum is simply dummy printing and typesetting in dust Ipsum has been the',
        },
    ];
    return (
        <section>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768] lg:max-w-[1240px] mx-auto pb-20 text-center">
                <h4 className="font-bold text-lg text-secondary">
                    Our Service
                </h4>
                <h2 className="text-4xl mb-8">Services We Provide</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service) => (
                        <HomeService
                            key={service._id}
                            service={service}
                        ></HomeService>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
