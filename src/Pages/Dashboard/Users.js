import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'

const Users = () => {
    const {data: usersData, isLoading} = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))

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
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData?.map((user, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;