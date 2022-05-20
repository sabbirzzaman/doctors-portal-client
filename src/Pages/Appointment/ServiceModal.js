import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ServiceModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [{ displayName, email }] = useAuthState(auth);

    const formattedDate = format(date, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const bookingData = {
            treatmentId: _id,
            treatmentName: name,
            treatmentPrice: price,
            patientName: displayName,
            patientEmail: email,
            patientPhone: e.target.phone.value,
            appointmentDate: formattedDate,
            appointmentSlot: e.target.slot.value,
        };

        fetch('https://doctors-portal-react.herokuapp.com/treatment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success(
                        `Your appointment set on ${bookingData.appointmentDate} at ${bookingData.appointmentSlot}`
                    );
                } else {
                    toast.error(
                        `You already have an appointment for ${bookingData.treatmentName} at ${data.booking?.appointmentSlot}`
                    );
                }
                setTreatment(null);
                refetch()
            });
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
                                value={date && formattedDate}
                                type="text"
                                readOnly
                                disabled
                            />
                        </div>

                        <div>
                            <input
                                name="name"
                                className="input input-bordered w-full max-w-xl mb-5"
                                value={displayName || ''}
                                type="text"
                                readOnly
                                disabled
                                required
                            />
                        </div>

                        <div>
                            <input
                                name="email"
                                className="input input-bordered w-full max-w-xl mb-5"
                                value={email || ''}
                                type="email"
                                readOnly
                                disabled
                                required
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
                                name="phone"
                                className="input input-bordered w-full max-w-xl mb-5"
                                placeholder="Phone Number"
                                type="tel"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="btn btn-primary w-full"
                                value="Submit"
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
