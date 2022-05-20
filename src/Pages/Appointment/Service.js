import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h4 className="text-secondary text-xl font-bold">{name}</h4>
                <p>{slots.length ? slots[0] : 'Try Another Day!'}</p>
                <p className={slots.length || 'text-red-500'}>
                    {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}{' '}
                    Available
                </p>
                <p>
                    Price: <b>${price}</b>
                </p>
                <div className="mt-3">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length ? false : true}
                        htmlFor="treatment-modal"
                        className="btn btn-primary bg-gradient-to-r from-secondary to-accent text-white border-0 btn-sm"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
