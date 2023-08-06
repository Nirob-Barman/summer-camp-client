// PopularInstructors.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        // Fetch instructor data from the provided link with role = "instructor"
        axios
            .get('https://smc-server.vercel.app/users', {
                params: { role: 'instructor' },
            })
            .then((response) => {
                // Filter only the instructors with the role "instructor"
                const instructors = response.data.filter((instructor) => instructor.role === 'instructor');
                setPopularInstructors(instructors.slice(0, 6));
            })
            .catch((error) => {
                console.error('Error fetching instructors:', error);
            });
    }, []);

    return (
        // <div className="container mx-auto mt-8">
        <div className="container mx-auto mt-8 max-w-4xl">
            <div className="grid grid-cols-3 gap-4">
                {popularInstructors.map((instructor) => (
                    <div key={instructor._id} className="p-4 bg-white shadow rounded-lg">
                        <img
                            src={instructor.photoURL}
                            alt={instructor.name}
                            className="w-full h-40 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-lg font-semibold">{instructor.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">Email: {instructor.email}</p>
                        <p className="text-sm text-gray-600 mb-2">Gender: {instructor.gender}</p>
                        <p className="text-sm text-gray-600 mb-2">Phone Number: {instructor.phoneNumber}</p>
                        <p className="text-sm text-gray-600 mb-2">Address: {instructor.address}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-center">
                <Link to="/instructors" className="text-blue-500 font-semibold">
                    See All Instructors
                </Link>
            </div>
        </div>
    );
};

export default PopularInstructors;
