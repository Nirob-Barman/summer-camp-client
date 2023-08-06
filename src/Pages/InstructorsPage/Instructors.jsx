import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import { Link } from 'react-router-dom';

const Instructors = () => {
    const [instructors] = useInstructor();

    return (
        <div className="flex flex-wrap justify-center">
            {instructors.map((instructor) => (
                <div key={instructor._id} className="bg-white rounded-lg p-4 shadow-md w-full sm:w-1/2 lg:w-1/3 mb-4 mx-2">
                    <div className="flex items-center mb-4">
                        <img
                            src={instructor.photoURL}
                            alt={instructor.name}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <p className="font-semibold text-lg">{instructor.name}</p>
                            <p className="text-gray-600">{instructor.email}</p>
                        </div>
                    </div>
                    {/* Optional: Display the number of classes and their names */}
                    {instructor.classesTaken && (
                        <>
                            <p className="font-semibold mt-2">Number of Classes Taken: {instructor.classesTaken.length}</p>
                            <p className="font-semibold mt-1">Classes Taken:</p>
                            <ul className="list-disc ml-6">
                                {instructor.classesTaken.map((className) => (
                                    <li key={className}>{className}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    {/* Optional: "See Classes" button to show classes by this instructor */}
                    {/* Replace `YOUR_LINK_HERE` with the actual link for showing classes */}
                    <Link to={`/instructors/${instructor._id}`} className="text-blue-500 underline mt-2">
                        See Classes
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Instructors;
