import React from 'react';

const CoachingStaffAndFacilities = () => {
    const coachingStaffData = [
        {
            id: 1,
            name: 'John Doe',
            position: 'Head Coach',
            icon: 'bx bx-user',
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Assistant Coach',
            icon: 'bx bx-user',
        },
        {
            id: 3,
            name: 'David Johnson',
            position: 'Fitness Trainer',
            icon: 'bx bx-user',
        },
    ];

    const facilitiesData = [
        {
            id: 1,
            name: 'Gymnasium',
            icon: 'bx bx-dumbbell',
        },
        {
            id: 2,
            name: 'Swimming Pool',
            icon: 'bx bx-pool',
        },
        {
            id: 3,
            name: 'Athletics Track',
            icon: 'bx bx-run',
        },
        {
            id: 4,
            name: 'Football Field',
            icon: 'bx bx-football',
        },
    ];

    return (
        // <div className="container mx-auto p-4">
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 p-2 mt-10">
                    <div className="bg-white rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">Coaching Staff</h2>
                        {coachingStaffData.map((staff) => (
                            <div key={staff.id} className="flex items-center mb-2">
                                <i className={staff.icon + ' text-2xl text-blue-500 mr-2'}></i>
                                <div>
                                    <p className="text-lg font-bold">{staff.name}</p>
                                    <p className="text-gray-500">{staff.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-2">
                    <div className="bg-white rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">Facilities</h2>
                        {facilitiesData.map((facility) => (
                            <div key={facility.id} className="flex items-center mb-2">
                                <i className={facility.icon + ' text-2xl text-blue-500 mr-2'}></i>
                                <p className="text-lg">{facility.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachingStaffAndFacilities;
