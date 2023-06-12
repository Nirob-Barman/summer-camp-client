import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaFastBackward, FaAddressCard, FaFastForward, FaUserSecret } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import useCart from "../hooks/useCart";


const Dashboard = () => {

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
    const userRole = 'admin';
    // const userRole = 'instructor';


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

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
                                    <li><NavLink to="/dashboard/reservations"><FaAddressCard /> Add a Class</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> My Classes</NavLink></li>

                                </> : <>
                                    user dashboard
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> DashBoard
                                            {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                        </NavLink>
                                    </li>

                                </>
                            }
                        </>
                    }




                    {/* {
                        user ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    } */}


                    <li>
                        <div className="divider"></div>
                    </li>
                    <li><NavLink to="/"><FaHome></FaHome>Home Page</NavLink></li>
                    <li><NavLink onClick={goBack} to="/"><FaFastBackward></FaFastBackward> Previous page</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;