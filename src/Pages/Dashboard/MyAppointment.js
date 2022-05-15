import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [{ email }] = useAuthState(auth);

    const { data: bookings } = useQuery('bookings', () =>
        fetch(`http://localhost:5000/bookings?email=${email}`).then((res) =>
            res.json()
        )
    );

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{booking.patientName}</td>
                            <td>{booking.treatmentName}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.appointmentSlot}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;
