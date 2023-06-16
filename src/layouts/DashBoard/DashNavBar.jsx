import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const DashNavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);



    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            


            {
                user ? <>
                    <li>
                        <Link to="/dashboard/dash">
                            DashBoard
                        </Link>
                    </li>
                    <li onClick={handleLogOut}><Link to="/">LogOut</Link></li>
                    {/* <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button> */}
                </> : <>
                    <li><Link to="/login">Login</Link></li>
                </>
            }

        </>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>


                <div className="navbar">
                    {/* Your other navbar elements */}
                    <div className="navbar-start">
                        {/* Your other navbar-start elements */}
                    </div>
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
                    <div className="navbar-end">
                        {/* Your other navbar-end elements */}
                    </div>
                </div>

                {/* <a className="text-xl">EliteSportsAcademy</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            {/* <div className="navbar-end">
                {
                    user?.email
                }
            </div> */}


            <div className="navbar">
                {/* Your other navbar elements */}
                <div className="navbar-end hidden md:flex md:items-center">
                    <div>
                        <div className="flex items-center justify-center">
                            {user && user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="rounded-full w-12 h-12"
                                    data-testid="profile-image"
                                />
                            ) : (
                                <RxAvatar className="text-gray-500 w-12 h-12" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashNavBar;