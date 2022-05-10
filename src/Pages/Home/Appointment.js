import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import Button from '../common/button';

const Appointment = () => {
    return (
        <section className='my-20' style={{ backgroundImage: `url(${appointment})`}}>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768] lg:max-w-[1240px] mx-auto flex justify-between items-center gap-12">
                <div className="lg:w-1/2">
                    <img src={doctor} className="mt-[-100px]" alt="Appointment doctor" />
                </div>
                <div className="lg:w-1/2 text-white">
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

export default Appointment;
