import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorItem from './DoctorItem';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctors', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <section>
            <h2 className="text-left text-2xl font-bold mb-7">
                Manage All Doctors
            </h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <DoctorItem
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                            ></DoctorItem>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageDoctors;
