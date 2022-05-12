import { format } from 'date-fns';
import React from 'react';

const ServiceModal = ({ treatment, date }) => {
    const { name, slots } = treatment;

    const handleBooking = (e) => {
        e.preventDefault();
        const bookingData = {
            date: format(date, 'PP'),
            slot: e.target.slot.value,
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value
        }
        
        console.log(bookingData)
    };

    return (
        <div>
            <input
                type="checkbox"
                id="treatment-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex justify-between items-center mb-5">
                        <h4 className="font-bold test-right text-lg text-secondary">
                            {name}
                        </h4>
                        <label
                            htmlFor="treatment-modal"
                            className="btn btn-sm btn-circle"
                        >
                            ✕
                        </label>
                    </div>

                    <form onSubmit={handleBooking}>
                        <div>
                            <input
                                className="input w-full max-w-xl mb-5"
                                placeholder="Date"
                                value={date && format(date, 'PP')}
                                type="text"
                                readOnly
                                disabled
                            />
                        </div>
                        <div>
                            <select
                                name="slot"
                                className="select select-bordered w-full max-w-xl mb-5"
                            >
                                {slots.map((slot) => (
                                    <option key={slot} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <input
                                name="name"
                                className="input input-bordered w-full max-w-xl mb-5"
                                placeholder="Full Name"
                                type="text"
                            />
                        </div>
                        <div>
                            <input
                                name="phone"
                                className="input input-bordered w-full max-w-xl mb-5"
                                placeholder="Phone Number"
                                type="tel"
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                className="input input-bordered w-full max-w-xl mb-5"
                                placeholder="Email"
                                type="email"
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="btn btn-primary w-full"
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
