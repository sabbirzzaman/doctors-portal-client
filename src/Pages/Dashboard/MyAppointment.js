import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
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
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((b, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{b.patientName}</td>
                            <td>{b.treatmentName}</td>
                            <td>{b.appointmentDate}</td>
                            <td>{b.appointmentSlot}</td>
                            <td>{(b.treatmentPrice && !b.paid) && <Link className='btn btn-secondary text-white btn-sm' to={`/dashboard/payment/${b._id}`}>Pay</Link>}</td>
                            <td>{(b.treatmentPrice && b.paid) && <button className='btn btn-secondary text-white btn-sm'>Paid</button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;
