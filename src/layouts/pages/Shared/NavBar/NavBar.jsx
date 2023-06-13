import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/class">Class</Link></li>


            <li>
                <Link to="/dashboard/dash">
                    DashBoard
                </Link>
            </li>

            <li>
                {
                    user && <Link to='/about'>{user?.displayName}</Link>
                }
            </li>

            {
                user ? <>
                    <li onClick={handleLogOut}><Link to="/">LogOut</Link></li>
                    {/* <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button> */}
                </> : <>
                    <li><Link to="/login">Login</Link></li>
                </>
            }


        </>
    );

    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><a>Item 1</a></li>
        //                 <li>
        //                     <a>Parent</a>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <NavLink to="/" className="text-xl hover:text-red-500 hover:text-4xl">EliteSportsAcademy</NavLink>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><a>Item 1</a></li>
        //             <li tabIndex={0}>
        //                 <details>
        //                     <summary>Parent</summary>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </details>
        //             </li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // </div>


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


                {/* <NavLink to="/" className="text-xl hover:text-red-500 hover:text-4xl">EliteSportsAcademy</NavLink> */}
                {/* <NavLink
                    exact
                    to="/"
                    className="text-xl hover:text-red-500 hover:text-4xl"
                    style={{
                        transition: 'font-size 0.3s',
                        fontSize: '1.6rem', // Default font size
                    }}
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                >
                    EliteSportsAcademy
                </NavLink> */}
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
                <div className="navbar-end hidden md:block">
                    {/* <a className="btn">Get started</a> */}
                    {/* user?.email */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;





// import { Link, NavLink } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../../../../providers/AuthProvider";

// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     };

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     useEffect(() => {
//         const closeMobileMenu = () => {
//             if (window.innerWidth > 768) {
//                 setIsMobileMenuOpen(false);
//             }
//         };

//         window.addEventListener("resize", closeMobileMenu);

//         return () => {
//             window.removeEventListener("resize", closeMobileMenu);
//         };
//     }, []);

//     const navOptions = (
//         <>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/instructors">Instructors</Link>
//             </li>
//             <li>
//                 <Link to="/classes">Classes</Link>
//             </li>
//             <li>
//                 <Link to="/class">Class</Link>
//             </li>
//             <li>
//                 <Link to="/dashboard/mycart">Dashboard</Link>
//             </li>
//             <li>{user && <Link to="/about">{user?.displayName}</Link>}</li>
//             {user ? (
//                 <li onClick={handleLogOut}>
//                     <Link to="/">Logout</Link>
//                 </li>
//             ) : (
//                 <li>
//                     <Link to="/login">Login</Link>
//                 </li>
//             )}
//         </>
//     );

//     return (
//         <nav className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//             <div className="navbar-start">
//                 <NavLink to="/" className="text-xl hover:text-red-500 hover:text-4xl">
//                     EliteSportsAcademy
//                 </NavLink>
//             </div>

//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//             </div>

//             <div className="navbar-end">
//                 {user?.email}
//             </div>

//             <div className="navbar-mobile-menu lg:hidden">
//                 <button
//                     className="btn btn-sm"
//                     onClick={toggleMobileMenu}
//                     aria-label="Toggle mobile menu"
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M4 6h16M4 12h8m-8 6h16"
//                         />
//                     </svg>
//                 </button>
//                 {isMobileMenuOpen && (
//                     <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box">
//                         {navOptions}
//                     </ul>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default NavBar;
