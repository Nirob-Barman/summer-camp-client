import React from 'react';
import { Helmet } from 'react-helmet';
// import { useQuery } from 'react-query';
// import useAxiosSecure from 'path/to/useAxiosSecure';


const InstructorsPage = () => {
    // Dummy data for instructors
    
    const instructors = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            image: 'instructor1.jpg',
            classesTaken: 5,
            classes: ['Class A', 'Class B', 'Class C'],
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            image: 'instructor2.jpg',
            classesTaken: 3,
            classes: ['Class X', 'Class Y'],
        },
        // Add more instructors as needed
    ];

    // const [axiosSecure] = useAxiosSecure();
    // const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
    //     const res = await axiosSecure.get('/users'); // Replace '/users' with the correct endpoint for instructors
    //     return res.data;
    // });

    return (
        <div>

            <Helmet>
                <title>ESA | InstructorsPage</title>
            </Helmet>

            <h1 className='pt-20'>Instructors</h1>
            {instructors.map((instructor) => (
                <div key={instructor.id} className="my-6 p-4 border">
                    <div className="flex items-center mb-4">
                        <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-lg font-bold">{instructor?.name}</h2>
                            <p className="text-gray-600">{instructor?.email}</p>
                        </div>
                    </div>
                    {instructor.classesTaken && (
                        <p>
                            Number of Classes taken by the Instructor: {instructor?.classesTaken}
                        </p>
                    )}
                    {instructor.classes && (
                        <div>
                            <p>Name of the Classes taken by the Instructor:</p>
                            <ul className="list-disc pl-6">
                                {instructor?.classes.map((className) => (
                                    <li key={className}>{className}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <a href={`/instructors/${instructor?.id}`} className="btn mt-4">
                        See Classes
                    </a>
                </div>
            ))}
        </div>
    );
};

export default InstructorsPage;
