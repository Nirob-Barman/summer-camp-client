import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';

const MySelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const { user } = useAuth();

    const [enrolledClasses, refetch] = useEnrolledClasses();


    useEffect(() => {
        setSelectedClasses(enrolledClasses);
    }, [enrolledClasses]);


    const handleDeleteClass = async (classId) => {
        console.log('Delete', classId);
        try {
            // Send the classId to the server to delete the class
            await axios.delete(`https://smc-server.vercel.app/selectClasses/${classId}`);

            refetch();

            // Show success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Class Deleted!',
                text: 'You have successfully deleted the class.',
            });

            // Remove the deleted class from the state
            setSelectedClasses((prevSelectedClasses) => prevSelectedClasses.filter((cls) => cls._id !== classId));
        } catch (error) {
            console.error('Error deleting class:', error);
            // Handle error, if any
        }
    };


    // const handlePayStatus = async (classId) => {
    //     try {
    //         // Send the classId to the server to update the payment status to "Paid"
    //         await axios.put(`https://smc-server.vercel.app/selectClasses/${classId}`, { paymentStatus: 'Paid' });
    //         refetch();
    //     } catch (error) {
    //         console.error('Error updating payment status:', error);
    //         // Handle error, if any
    //     }
    // };

    const handlePayStatus = async (classId) => {
        try {
            // Send the classId and paymentStatus to the server to update payment status
            await axios.put(`https://smc-server.vercel.app/selectClasses/${classId}`, {
                paymentStatus: 'Paid', // Change 'Paid' to whatever payment status you want to set
            });

            refetch();

            // Show success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Payment Status Updated!',
                text: 'You have successfully updated the payment status.',
            });

            // Update the payment status in the state (Optional: If you want to change the button text)
            setSelectedClasses((prevSelectedClasses) =>
                prevSelectedClasses.map((cls) =>
                    cls._id === classId ? { ...cls, paymentStatus: 'Paid' } : cls
                )
            );
        } catch (error) {
            console.error('Error updating payment status:', error);
            // Handle error, if any
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4">My Selected Classes</h2>
            {selectedClasses.length === 0 ? (
                <p className="text-red-500">You have not selected any classes yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {selectedClasses.map((selectedClass) => (
                        <div
                            key={selectedClass._id}
                            className="bg-white p-4 rounded-lg"
                        >
                            <img
                                src={selectedClass.classImage}
                                alt={selectedClass.className}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <p className="text-lg font-semibold">{selectedClass.className}</p>
                            <p className="text-sm text-gray-600 mb-2">Instructor: {selectedClass.instructorName}</p>
                            <p className="text-sm text-gray-600 mb-2">Available Seats: {selectedClass.availableSeats}</p>
                            <p className="text-sm text-gray-600 mb-4">Price: {selectedClass.price}</p>

                            <div className="flex space-x-4">
                                <button
                                    onClick={() => handleDeleteClass(selectedClass._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>

                                {selectedClass.paymentStatus === 'Paid' ? (
                                    <button className="btn btn-success" disabled>
                                        Paid
                                    </button>
                                ) : (
                                    <button onClick={() => handlePayStatus(selectedClass._id)} className="btn btn-primary">
                                        Pay
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MySelectedClasses;
