import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: usersData, isLoading, refetch } = useQuery('users', () =>
        fetch('https://doctors-portal-react.herokuapp.com/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading height="50vh"></Loading>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin Control Panel</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData?.map((user, index) => (
                        <UserTable key={index} user={user} serial={index + 1} refetch={refetch}></UserTable>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
