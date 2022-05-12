import React, { useState } from 'react';
import AppointmentCard from './AppointmentCard';
import AppointmentHero from './AppointmentHero';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <AppointmentHero date={date} setDate={setDate}></AppointmentHero>
            <AppointmentCard date={date}></AppointmentCard>
        </>
    );
};

export default Appointment;