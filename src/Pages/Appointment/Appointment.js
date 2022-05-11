import React, { useState } from 'react';
import AppointmentCard from './AppointmentCard';
import AppointmentHero from './AppointmentHero';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <>
            <AppointmentHero selected={selected} setSelected={setSelected}></AppointmentHero>
            <AppointmentCard selected={selected}></AppointmentCard>
        </>
    );
};

export default Appointment;