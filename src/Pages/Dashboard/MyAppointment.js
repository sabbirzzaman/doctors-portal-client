import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [{ email }] = useAuthState(auth);

    const { data: bookings, isLoading } = useQuery('bookings', () =>
        fetch(`https://doctors-portal-react.herokuapp.com/bookings?email=${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                toast.error('Login Expired');
            } else {
                return res.json();
            }
        })
    );

    if(isLoading) {
        return <Loading height="50vh"></Loading>
    }

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
