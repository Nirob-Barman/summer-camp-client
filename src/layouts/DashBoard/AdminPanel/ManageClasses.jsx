import { useState, useEffect } from "react";
import { getAllClasses } from "../../../apis/classeapi";

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
                console.error(error);
                // Handle the error here, such as showing an error message or performing any necessary actions
            });
    }, []);


    const handleApproveClass = (classId) => {
        // Update class status to approved in the database
        updateClassStatus(classId, "approved")
            .then(() => {
                // Update class status in the local state
                setClasses((prevClasses) =>
                    prevClasses.map((classItem) =>
                        classItem.id === classId
                            ? { ...classItem, status: "approved" }
                            : classItem
                    )
                );
            })
            .catch((error) => {
                console.error("Error updating class status:", error);
            });
    };

    const handleDenyClass = (classId) => {
        // Update class status to denied in the database
        updateClassStatus(classId, "denied")
            .then(() => {
                // Update class status in the local state
                setClasses((prevClasses) =>
                    prevClasses.map((classItem) =>
                        classItem.id === classId
                            ? { ...classItem, status: "denied" }
                            : classItem
                    )
                );
            })
            .catch((error) => {
                console.error("Error updating class status:", error);
            });
    };

    const handleOpenModal = (classId) => {
        // Set the selected class
        const selected = classes.find((classItem) => classItem.id === classId);
        setSelectedClass(selected);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedClass(null);
        setFeedback("");
        setModalOpen(false);
    };

    const handleSendFeedback = () => {
        // Send feedback to the instructor
        sendFeedback(selectedClass.id, feedback)
            .then(() => {
                // Update class feedback in the local state
                setClasses((prevClasses) =>
                    prevClasses.map((classItem) =>
                        classItem.id === selectedClass.id
                            ? { ...classItem, feedback }
                            : classItem
                    )
                );
                handleCloseModal();
            })
            .catch((error) => {
                console.error("Error sending feedback:", error);
            });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
            {classes.length === 0 ? (
                <p>No classes found.</p>
            ) : (
                <table className="w-full bg-white border border-gray-200 rounded shadow">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4">Class Image</th>
                            <th className="py-2 px-4">Class Name</th>
                            <th className="py-2 px-4">Instructor Name</th>
                            <th className="py-2 px-4">Instructor Email</th>
                            <th className="py-2 px-4">Available Seats</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem) => (
                            <tr key={classItem.id} className="border-2 border-gray-200">
                                <td className="py-2 px-4">
                                    <img
                                        src={classItem.image}
                                        alt="Class"
                                        className="w-20 h-20"
                                    />
                                </td>
                                <td className="py-2 px-4">{classItem.classname}</td>
                                <td className="py-2 px-4">{classItem.instructorName}</td>
                                <td className="py-2 px-4">{classItem.instructorEmail}</td>
                                <td className="py-2 px-4">{classItem.availableSeats}</td>
                                <td className="py-2 px-4">{classItem.price}</td>
                                <td className="py-2 px-4">{classItem.status}</td>
                                <td className="py-2 px-4">
                                    {classItem.status === "pending" && (
                                        <>
                                            <button
                                                onClick={() => handleApproveClass(classItem.id)}
                                                disabled={classItem.status !== "pending"}
                                                className="px-3 py-2 rounded-md bg-green-500 text-white mr-2"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleDenyClass(classItem.id)}
                                                disabled={classItem.status !== "pending"}
                                                className="px-3 py-2 rounded-md bg-red-500 text-white mr-2"
                                            >
                                                Deny
                                            </button>
                                            <button
                                                onClick={() => handleOpenModal(classItem.id)}
                                                disabled={classItem.status !== "pending"}
                                                className="px-3 py-2 rounded-md bg-blue-500 text-white"
                                            >
                                                Send Feedback
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                                onClick={handleSendFeedback}
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
