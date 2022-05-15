import { format } from 'date-fns';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import Service from './Service';
import ServiceModal from './ServiceModal';
import Loading from '../Shared/Loading'

const AppointmentCard = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const {data: services, isLoading, refetch} = useQuery(['treatments', formattedDate], () => 
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto text-center py-20">
                <h4 className="text-secondary text-2xl lg:text-3xl mb-8 font-bold">
                    Available Appointments on {date && formattedDate}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                    {services?.map((service) => (
                        <Service
                            key={service._id}
                            setTreatment={setTreatment}
                            service={service}
                        ></Service>
                    ))}
                </div>
                {treatment && (
                    <ServiceModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></ServiceModal>
                )}
            </div>
        </section>
    );
};

export default AppointmentCard;
