import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentHero = ({ date, setDate }) => {
    const calendarCss = `
        .my-selected:not([disabled]) { 
            font-weight: bold; 
            border-color: #19D3AE;
            background-color: #19D3AE;
            color: #fff;
        }
        .my-selected:hover:not([disabled]) { 
            border-color: #19D3AE;
            background-color: #19D3AE;
            color: #fff;
        }
        .my-selected:focus:not([disabled]) { 
            border-color: #19D3AE;
            background-color: #19D3AE;
            color: #fff;
        }
    `;

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
                    <style>{calendarCss}</style>
                    <DayPicker
                        className="shadow-xl bg-white p-6 rounded-2xl"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today',
                        }}
                        modifiersStyles={{
                            disabled: { fontSize: '75%' },
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentHero;
