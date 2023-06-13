import { useState, useEffect } from 'react';
import { allusers, becomeInstructor, becomeAdmin } from '../../../apis/auth';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        allusers()
            .then(users => {
                setUsers(users)
            })
    }, [users]);

    // Update the user's role as an instructor in the database

    const handleMakeInstructor = (email) => {

        becomeInstructor(email);

    };

    // Update the user's role as an admin in the database

    const handleMakeAdmin = (email) => {

        becomeAdmin(email);

    };

    return (
        // <div>
        //     <h2 className="text-2xl font-bold mb-4 text-center">Manage Users</h2>
        //     {users.length === 0 ? (
        //         <p>No users found.</p>
        //     ) : (
        //         <table className="w-full bg-white border border-gray-200 rounded shadow text-center">
        //             <thead>
        //                 <tr className="bg-gray-100">
        //                     <th className="py-2 px-4">Name</th>
        //                     <th className="py-2 px-4">Email</th>
        //                     <th className="py-2 px-4">Role</th>
        //                     <th className="py-2 px-4">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {users.map((user) => (
        //                     <tr key={user.id} className="border-2 border-gray-200">
        //                         <td className="py-2 px-4">{user.name}</td>
        //                         <td className="py-2 px-4">{user.email}</td>
        //                         <td className="py-2 px-4">{user.role}</td>
        //                         <td className="py-2 px-4">
        //                             <div className="flex space-x-2 justify-center">
        //                                 <button
        //                                     onClick={() => handleMakeInstructor(user.email)}
        //                                     disabled={user.role === 'instructor'}
        //                                     className="px-3 py-2 rounded-md bg-green-500 text-white disabled:bg-gray-400"
        //                                 >
        //                                     Make Instructor
        //                                 </button>
        //                                 <button
        //                                     onClick={() => handleMakeAdmin(user.email)}
        //                                     disabled={user.role === 'admin'}
        //                                     className="px-3 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-400"
        //                                 >
        //                                     Make Admin
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     )}
        // </div>

        // <div>
        //     <h2 class="text-2xl font-bold mb-4 text-center">Manage Users</h2>
        //     {users.length === 0 ? (
        //         <p>No users found.</p>
        //     ) : (
        //         <table class="w-full bg-gray-800 text-white border border-gray-200 rounded shadow">
        //             <thead>
        //                 <tr class="bg-gray-900">
        //                     <th class="py-3 px-4">Name</th>
        //                     <th class="py-3 px-4">Email</th>
        //                     <th class="py-3 px-4">Role</th>
        //                     <th class="py-3 px-4">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {users.map((user) => (
        //                     <tr key={user.id} class="border-b border-gray-700">
        //                         <td class="py-3 px-4">{user.name}</td>
        //                         <td class="py-3 px-4">{user.email}</td>
        //                         <td class="py-3 px-4">{user.role}</td>
        //                         <td class="py-3 px-4">
        //                             <div class="flex space-x-2 justify-center">
        //                                 <button
        //                                     onClick={() => handleMakeInstructor(user.email)}
        //                                     disabled={user.role === "instructor"}
        //                                     class="px-4 py-2 rounded-md bg-green-500 text-white disabled:bg-gray-400 hover:bg-green-600"
        //                                 >
        //                                     Make Instructor
        //                                 </button>
        //                                 <button
        //                                     onClick={() => handleMakeAdmin(user.email)}
        //                                     disabled={user.role === "admin"}
        //                                     class="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-400 hover:bg-blue-600"
        //                                 >
        //                                     Make Admin
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     )}
        // </div>

        <div>
            <h2 class="text-2xl font-bold mb-4 text-center">Manage Users</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {users.map((user) => (
                        <div key={user.id} class="bg-white border border-gray-200 rounded shadow">
                            <div class="p-4">
                                <h3 class="text-lg font-semibold">{user.name}</h3>
                                <p class="text-gray-600">{user.email}</p>
                                <p class="mt-2">
                                    Role: <span class="font-semibold">{user.role}</span>
                                </p>
                                <div class="mt-4 flex justify-center space-x-2">
                                    <button
                                        onClick={() => handleMakeInstructor(user.email)}
                                        disabled={user.role === "instructor"}
                                        class="px-4 py-2 rounded-md bg-green-500 text-white disabled:bg-gray-400 hover:bg-green-600"
                                    >
                                        Make Instructor
                                    </button>
                                    <button
                                        onClick={() => handleMakeAdmin(user.email)}
                                        disabled={user.role === "admin"}
                                        class="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-400 hover:bg-blue-600"
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