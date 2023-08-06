import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const DashNavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>

            {user ? (
                <>
                    <li>
                        <Link to="/dashboard/dash">DashBoard</Link>
                    </li>
                    <li onClick={handleLogOut}>
                        <Link to="/">LogOut</Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-black text-white">
            <div className="navbar-start">
                <div className="navbar-center flex items-center">
                    <NavLink
                        exact
                        to="/"
                        className="text-xl hover:text-red-500 hover:text-4xl mx-auto"
                        style={{
                            transition: 'font-size 0.3s',
                            fontSize: '1.6rem', // Default font size
                        }}
                        activeStyle={{
                            fontWeight: 'bold',
                        }}
                    >
                        EliteSportsAcademy
                    </NavLink>
                </div>
            </div>

            <div className="navbar-end hidden sm:flex">
                <ul className="menu menu-horizontal">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {user && (
                        <li>
                            <button onClick={handleLogOut}>LogOut</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DashNavBar;
