import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers, FaFastBackward, FaAddressCard, FaFastForward, FaUserSecret, FaRegClipboard } from 'react-icons/fa';
import { GiClassicalKnowledge } from 'react-icons/gi';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { RiCheckLine } from 'react-icons/ri';
import { useContext, useEffect, useState } from "react";
import { allusers } from "../../apis/auth";
import { AuthContext } from "../../providers/AuthProvider";
import DashNavBar from "./DashNavBar";
// import useCart from "../hooks/useCart";


const Dashboard = () => {

    const { user } = useContext(AuthContext);
    // console.log(user.email);
    // console.log('DashBoard User',user);
    // console.log(user.displayName);
    // console.log(user.email);

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     allusers()
    //         .then(users => {
    //             setUsers(users)
    //         })
    // }, []);

    // console.log(users);
    // let roles = '';
    // console.log('roles before updating', roles);

    // let userRole = '';
    // {
    //     users.map(findUser => {
    //         if (findUser.email === user.email) {
    //             // roles = findUser.role;
    //             userRole = findUser.role;
    //         }
    //     })
    // }
    // console.log(userRole);

    // console.log('After updating', roles);


    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    // const goBack = () => {
    //     window.history.back();
    // };

    // const [cart] = useCart();

    // const isAdmin = false;
    // const isAdmin = true;

    // const user = 'admin';
    // const user = 'instructor';

    // const userRole = true;
    // const userRole = 'admin';
    // const userRole = 'instructor';

    const { role } = useContext(AuthContext);
    const userRole = role;
    console.log('DashBoard Role ', role);



    const isMobileDevice = window.innerWidth <= 768; // Check if the device is mobile (adjust the breakpoint as needed)


    return (
        <>
            <DashNavBar />

            <div className="pt-20 drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"
                    defaultChecked={isMobileDevice}
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    {isMobileDevice && (
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Open drawer
                        </label>
                    )}
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>


                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {
                            userRole === 'admin' ? <>
                                admin dashboard
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageclasses"><FaBook></FaBook> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"> <FaUserSecret /> Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                            </> : <>
                                {
                                    userRole === 'instructor' ? <>
                                        instructor dashboard
                                        <li><NavLink to="/dashboard/instructorhome"><FaHome></FaHome>Instructor Home</NavLink></li>
                                        <li><NavLink to="/dashboard/addclasses"><FaAddressCard /> Add a Class</NavLink></li>
                                        <li><NavLink to="/dashboard/myclasses"><GiClassicalKnowledge /> My Classes</NavLink></li>

                                    </> : <>
                                        user dashboard
                                        <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                        <li><NavLink to="/dashboard/enrolled"><AiOutlinePlusSquare /> Enrolled</NavLink></li>
                                        <li><NavLink to="/dashboard/classes"><RiCheckLine /> Selected Classes</NavLink></li>
                                    </>
                                }
                            </>
                        }


                        <li>
                            <div className="divider"></div>
                        </li>
                        <li><NavLink to="/"><FaHome></FaHome>Home Page</NavLink></li>
                        <li><NavLink onClick={goBack} to="/"><FaFastBackward></FaFastBackward> Previous page</NavLink></li>
                        <li><NavLink to="/dashboard/dash"><FaRegClipboard /> Dashboard</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;