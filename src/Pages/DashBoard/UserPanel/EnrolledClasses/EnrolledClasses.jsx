import React from 'react';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';

const EnrolledClasses = () => {

    const [enrolledClasses] = useEnrolledClasses();

    const paidClasses = enrolledClasses.filter((cls) => cls.paymentStatus === 'Paid');

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">My Enrolled Classes</h2>
            {paidClasses.length === 0 ? (
                <p className="text-red-500">You have not enrolled in any classes yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {paidClasses.map((enrolledClass) => (
                        <div key={enrolledClass._id} className="bg-white p-4 rounded-lg">
                            <img
                                src={enrolledClass.classImage}
                                alt={enrolledClass.className}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <p className="text-lg font-semibold">{enrolledClass.className}</p>
                            <p className="text-sm text-gray-600 mb-2">Instructor: {enrolledClass.instructorName}</p>
                            <p className="text-sm text-gray-600 mb-2">Available Seats: {enrolledClass.availableSeats}</p>
                            <p className="text-sm text-gray-600 mb-4">Price: {enrolledClass.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnrolledClasses;
