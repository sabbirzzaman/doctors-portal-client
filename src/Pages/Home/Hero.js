import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'
import Button from '../common/button';

const Hero = () => {
    return (
        <section style={{backgroundImage: `url(${bg})`}} className="hero min-h-screen">
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768] lg:max-w-[1240px] hero-content flex-col justify-between gap-12 lg:flex-row-reverse">
                <img
                    src={chair}
                    className="lg:w-1/2 rounded-lg shadow-2xl"
                    alt="hero chair"
                />
                <div className="">
                    <h1 className="text-2xl md:text-4xl font-bold">
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

export default Hero;
