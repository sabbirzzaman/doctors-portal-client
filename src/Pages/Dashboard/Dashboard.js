import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <section className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto text-center py-5">
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-slider"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content py-4">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-slider"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            <Link to="/dashboard/appointments">
                                My Appointment
                            </Link>
                        </li>
                        {admin && (
                            <>
                                <li>
                                    <Link to="/dashboard/users">All Users</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/add-doctor">Add A Doctor</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
