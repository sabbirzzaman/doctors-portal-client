import { format } from 'date-fns';
import React from 'react';

const AppointmentCard = ({ selected }) => {
    return (
        <section>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto text-center py-20">
                <h4 className='text-secondary text-2xl'>
                    Available Appointments on{' '}
                    {selected && format(selected, 'PP')}
                </h4>
            </div>
        </section>
    );
};

export default AppointmentCard;
