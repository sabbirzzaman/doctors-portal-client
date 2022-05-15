import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    const menu = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/appointment">Appointment</Link>
            </li>
            <li>
                <Link to="/reviews">Reviews</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            {user ? (
                <>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <button
                        onClick={() => signOut(auth)}
                        className="btn btn-secondary text-white btn-sm"
                    >
                        Sign Out
                    </button>
                </>
            ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )}
        </>
    );

    if (loading) {
        return '';
    }

    return (
        <div className="navbar mx-auto max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menu}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Doctors Portal
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex lg:w-1/2 lg:justify-end">
                <ul className="menu menu-horizontal p-0 items-center">
                    {menu}
                </ul>
            </div>

            <div className="navbar-end lg:hidden">
                <label
                    htmlFor="dashboard-slider"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </label>
            </div>
        </div>
    );
};

export default Header;
