import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentHero = ({selected, setSelected}) => {
    return (
        <section
            style={{ backgroundImage: `url(${bg})` }}
            className="hero min-h-screen"
        >
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] md:mb-16 lg:max-w-[1240px] hero-content flex-col justify-between gap-12 lg:flex-row-reverse p-0 justify-evenly">
                <img
                    src={chair}
                    className="lg:w-1/2 rounded-lg shadow-2xl"
                    alt="hero chair"
                />
                <div>
                    <DayPicker
                        className="shadow-xl bg-white p-6 rounded-2xl"
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentHero;
