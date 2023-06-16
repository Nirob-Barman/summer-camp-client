import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { allusers } from '../../../apis/auth';
import { AuthContext } from '../../../providers/AuthProvider';
// import { useQuery } from 'react-query';
// import useAxiosSecure from 'path/to/useAxiosSecure';

const InstructorsPage = () => {
    // Dummy data for instructors

    const { user, role } = useContext(AuthContext);
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        // Fetch all approved classes from the API
        allusers()
            .then((users) => {
                // setClasses(classes);
                const filteredUsers = users.filter(
                    (user) => user.role === "instructor"
                );
                setInstructors(filteredUsers);
            })
            .catch((error) => {
                console.error("Error fetching classes:", error);
            });
    }, [instructors]);

    return (
        <div>

            <Helmet>
                <title>ESA | Instructor</title>
            </Helmet>

            {/* <div className="max-w-screen mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {instructors.map((classItem) => (
                        <div
                            key={classItem._id}
                            className={
                                "p-4 rounded-lg shadow-xl overflow-hidden w-80 mx-auto flex flex-col justify-between bg-gray-400"
                            }
                        >
                            <img
                                src={classItem.image}
                                alt={classItem.name}
                                className="w-44 h-44 rounded-full mx-auto"
                            />
                            <div className="p-4">
                                <p className="mb-2">
                                    <span className="font-bold">Instructor Name: </span>
                                    {classItem.name}
                                </p>
                                <p className="mb-2">
                                    <span className="font-bold">Email: </span>
                                    {classItem.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* <div className="max-w-screen mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {instructors.map((classItem) => (
                        <div
                            key={classItem._id}
                            className="p-4 rounded-lg shadow-xl overflow-hidden bg-gray-400"
                        >
                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    src={classItem.image}
                                    alt={classItem.name}
                                    className="object-cover object-center w-full h-full rounded-full"
                                />
                            </div>
                            <div className="p-4">
                                <p className="mb-2">
                                    <span className="font-bold">Instructor Name: </span>
                                    {classItem.name}
                                </p>
                                <p className="mb-2">
                                    <span className="font-bold">Email: </span>
                                    {classItem.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            <div className="max-w-screen mx-auto my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {instructors.map((classItem) => (
                        <div
                            key={classItem._id}
                            className="bg-white rounded-lg shadow-xl overflow-hidden"
                        >
                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    src={classItem.image}
                                    alt={classItem.name}
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-xl font-bold mb-2">{classItem.name}</p>
                                <p className="text-gray-600">{classItem.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default InstructorsPage;
