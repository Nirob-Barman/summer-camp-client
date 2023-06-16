import { useState, useEffect } from 'react';
import { allusers, becomeAdmin, becomeInstructor } from '../../../apis/auth';


const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        allusers().then((users) => {
            setUsers(users);
        });
    }, [users]);

    const handleMakeInstructor = (email) => {
        becomeInstructor(email);
    };

    const handleMakeAdmin = (email) => {
        becomeAdmin(email);
    };

    return (

        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Manage Users</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {users.map((user) => (
                        <div key={user._id} className="bg-white border border-gray-200 rounded shadow">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{user.name}</h3>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="mt-2">
                                    Role: <span className="font-semibold">{user?.role || 'student'}</span>
                                </p>
                                <div className="mt-4 flex justify-center space-x-2">
                                    <button
                                        onClick={() => handleMakeInstructor(user.email)}
                                        disabled={user.role === "instructor"}
                                        className="px-4 py-2 rounded-md bg-green-500 text-white disabled:bg-gray-400 hover:bg-green-600"
                                    >
                                        Make Instructor
                                    </button>
                                    <button
                                        onClick={() => handleMakeAdmin(user.email)}
                                        disabled={user.role === "admin"}
                                        className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-400 hover:bg-blue-600"
                                    >
                                        Make Admin
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>


    );
};

export default ManageUsers;