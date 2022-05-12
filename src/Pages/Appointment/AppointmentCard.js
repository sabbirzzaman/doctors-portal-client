import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import ServiceModal from './ServiceModal';

const AppointmentCard = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <section>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto text-center py-20">
                <h4 className="text-secondary text-2xl lg:text-3xl mb-8 font-bold">
                    Available Appointments on {date && format(date, 'PP')}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                    {services.map((service) => (
                        <Service
                            key={service._id}
                            setTreatment={setTreatment}
                            service={service}
                        ></Service>
                    ))}
                </div>
                {treatment && (
                    <ServiceModal date={date} treatment={treatment}></ServiceModal>
                )}
            </div>
        </section>
    );
};

export default AppointmentCard;
