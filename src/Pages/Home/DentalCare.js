import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Button from '../common/button';

const DentalCare = () => {
    return (
        <section className="hero min-h-screen pb-20">
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768] lg:max-w-[1040px] hero-content flex-col justify-between gap-12 lg:flex-row p-0">
                <div className='lg:w-1/2'>
                    <img
                        src={treatment}
                        className="rounded-lg shadow-2xl"
                        alt="treatment"
                    />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the
                    </p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;
