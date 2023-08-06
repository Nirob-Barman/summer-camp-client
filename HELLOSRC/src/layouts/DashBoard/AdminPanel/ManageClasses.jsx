import React, { useState, useEffect } from 'react';
import { approveClass, denyClass, getAllClasses, sendFeedback } from '../../../apis/classeapi';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Fetch all classes from the API
        getAllClasses()
            .then((classes) => {
                setClasses(classes);
            })
            .catch((error) => {
                console.error("Error fetching classes:", error);
            });
    }, [classes]);

    const handleApproveClass = (classId) => {
        // Update class status to "approved" in the database
        approveClass(classId);
    };

    const handleDenyClass = (classId) => {
        // Update class status to denied in the database
        denyClass(classId);
    };

    const handleSendFeedback = (classId) => {
        // Send feedback to the instructor
        sendFeedback(classId, feedback)
            .then(() => {
                // Feedback sent successfully, update the UI or perform any necessary actions
                console.log("Feedback sent successfully");
                handleCloseModal();
            })
            .catch((error) => {
                console.error("Error sending feedback:", error);
            });
    };

    const handleOpenModal = (classId) => {
        // Set the selected class
        const selected = classes.find((classItem) => classItem._id === classId);
        setSelectedClass(selected);
        setFeedback("");
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedClass(null);
        setFeedback("");
        setModalOpen(false);
    };

    //  console.log(classes)

    return (
        
        


        <div className="max-w-2xl mx-auto my-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Manage Classes</h2>
            {classes.length === 0 ? (
                <p>No classes found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {classes.map((classItem) => (
                        <div key={classItem._id} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <img
                                    src={classItem.image}
                                    alt="Class"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <span className="font-semibold text-lg">{classItem.classname}</span>
                            </div>
                            <p className="mb-2">Instructor: {classItem.instructorName}</p>
                            <p className="mb-2">Email: {classItem.instructorEmail}</p>
                            <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
                            <p className="mb-2">Price: {classItem.price}</p>
                            <p className="mb-2">Status: {classItem.status}</p>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={() => handleApproveClass(classItem._id)}
                                    disabled={classItem.status !== "pending"}
                                    className={`px-4 py-2 rounded-md ${classItem.status !== "pending"
                                            ? "bg-gray-500 text-white cursor-not-allowed"
                                            : "bg-green-500 text-white hover:bg-green-600"
                                        }`}
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleDenyClass(classItem._id)}
                                    disabled={classItem.status !== "pending"}
                                    className={`px-4 py-2 rounded-md ${classItem.status !== "pending"
                                            ? "bg-gray-500 text-white cursor-not-allowed"
                                            : "bg-red-500 text-white hover:bg-red-600"
                                        }`}
                                >
                                    Deny
                                </button>
                                <button
                                    onClick={() => handleOpenModal(classItem._id)}
                                    disabled={classItem.status !== "pending"}
                                    className={`px-4 py-2 rounded-md ${classItem.status !== "pending"
                                            ? "bg-gray-500 text-white cursor-not-allowed"
                                            : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    Send Feedback
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {modalOpen && selectedClass && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white w-96 p-6 rounded-md">
                        <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
                        <textarea
                            className="w-full h-20 border border-gray-300 rounded p-2 mb-4"
                            placeholder="Enter feedback..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                onClick={() => handleSendFeedback(selectedClass._id)}
                                className="px-4 py-2 rounded-md bg-blue-500 text-white"
                            >
                                Send
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 ml-2"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>


        

    );
};

export default ManageClasses;