import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({ user, serial, refetch }) => {
    const email = user.email;

    const makeAdmin = () => {
        fetch(`https://doctors-portal-react.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error('Failed to made an admin');
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Admin made successfully!`);
                }
            });
    };

    return (
        <tr>
            <th>{serial}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {user.role !== 'Admin' ? (
                    <>
                        <button
                            onClick={makeAdmin}
                            className="btn btn-info text-white mr-3 btn-xs"
                        >
                            Make Admin
                        </button>
                        <button className="btn btn-error btn-xs text-white">
                            Ban User
                        </button>
                    </>
                ) : (
                    <button className="btn btn-success btn-xs text-white">
                        ADMIN
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UserTable;
