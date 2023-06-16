import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { deleteBooking, getBookings, getPayment } from '../../../apis/bookings';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const SelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user?.email);

    useEffect(() => {
        // Fetch selected classes from the API for the logged-in student
        getBookings(user?.email)
            // getAllBookings()
            .then((classes) => {
                const filteredClasses = classes.filter((classItem) => classItem.status !== "paid");
                setSelectedClasses(filteredClasses);
            });
    }, [selectedClasses]);

    const handleDeleteClass = (classId) => {
        // Remove the selected class by ID
        deleteBooking(classId)
            .then(() => {
                // Remove the class from the state
                // setSelectedClasses((prevClasses) =>
                //   prevClasses.filter((classItem) => classItem.id !== classId)
                // );
                toast.success("deleted!");
            })
            .catch((error) => {
                console.error("Error deleting selected class:", error);
            });
    };

    const handlePayment = (bookingId, classId) => {
        console.log('Payment', bookingId, classId);
        // Remove the selected class by ID
        getPayment(bookingId, classId)
            .then(() => {
                // Remove the class from the state
                // setSelectedClasses((prevClasses) =>
                //   prevClasses.filter((classItem) => classItem.id !== classId)
                // );
                toast.success("Paid success!");
                navigate("/dashboard/enrolled");
            })
            .catch((error) => {
                console.error("Error selected class:", error);
            });
    };

    return (

        <div className="max-w-2xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4 text-center">My Selected Classes</h2>
            {selectedClasses.length === 0 ? (
                <p className="text-center font-bold text-xl text-red-800">No selected classes found.</p>
            ) : (
                <div className="flex flex-wrap -mx-4">
                    {selectedClasses.map((classItem) => (
                        <div key={classItem._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow">
                                <img src={classItem.image} alt="" className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{classItem.classname}</h3>
                                    <p className="mb-2">Instructor Name: {classItem.instructorName}</p>
                                    <p className="mb-2">Price: {classItem.price}</p>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-3 py-2 rounded-md bg-red-500 text-white mr-1"
                                            onClick={() => handleDeleteClass(classItem._id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className={`px-3 py-2 rounded-md ${classItem?.status === "paid" ? "bg-green-500" : "bg-blue-500"} text-white`}
                                            onClick={() => handlePayment(classItem._id, classItem.classid)}
                                            disabled={classItem?.status === "paid"}
                                        >
                                            {classItem?.status === "paid" ? "Paid" : "Pay"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectedClasses;
