import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        // <div>
        //     <h1>Admin Dashboard</h1>
        //     Admin-specific content
        // </div>
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <div className="bg-white shadow-md md:w-1/5 p-4">
                    {/* Sidebar */}
                    <h3 className="text-lg font-semibold mb-4">Dashboard</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li>
                            <Link>Posts</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/allusers">Users</Link>
                        </li>
                        <li>
                            <Link>Settings</Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-white shadow-md md:flex-1 p-4">
                    {/* Main Content */}
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus sem non enim lacinia, in viverra sapien tincidunt. Ut fermentum odio sit amet sagittis varius.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;