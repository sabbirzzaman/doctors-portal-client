import React from 'react';
import { toast } from 'react-toastify';

const DoctorItem = ({ doctor, index, refetch }) => {
    const { img, name, specialty, email } = doctor;

    const handleDeleteDoctor = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged) {
                    toast.success('Doctor deleted successfully!');
                    refetch();
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="mask mask-squircle w-12 h-12">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button
                    onClick={() => handleDeleteDoctor(email)}
                    className="btn btn-error text-white btn-xs"
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default DoctorItem;
