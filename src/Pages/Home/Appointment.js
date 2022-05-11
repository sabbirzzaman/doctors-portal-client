import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import Button from '../common/button';

const Appointment = () => {
    return (
        <section
            className="my-20"
            style={{ backgroundImage: `url(${appointment})` }}
        >
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto flex justify-between items-center gap-12">
                <div className="lg:w-1/2 hidden lg:block">
                    <img
                        src={doctor}
                        className="mt-[-100px]"
                        alt="Appointment doctor"
                    />
                </div>
                <div className="lg:w-1/2 text-white py-20 lg:py-10">
                    <h4 className="font-bold text-lg text-secondary mb-2">
                        Appointment
                    </h4>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">
                        Make an appointment Today
                    </h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsumis
                        that it has a more-or-less normal distribution of
                        letters,as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page
                    </p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
