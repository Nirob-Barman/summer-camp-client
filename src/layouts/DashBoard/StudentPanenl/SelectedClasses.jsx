import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { deleteBooking, getBookings, getPayment } from '../../../apis/bookings';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet';

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
                const filteredClasses = classes.filter(
                    (classItem) => classItem.status !== "paid"
                );
                setSelectedClasses(filteredClasses);
            });
    }, [selectedClasses]);

    const handleDeleteClass = (classId) => {

        deleteBooking(classId)
            .then(() => {

                toast.success("deleted!");
            })
            .catch((error) => {
                console.error("Error deleting selected class:", error);
            });
    };

    return (

        <div className="max-w-2xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4 text-center">My Selected Classes</h2>
            {selectedClasses.length === 0 ? (
                <p className="text-center font-bold text-xl text-red-800">No selected classes found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedClasses.map((classItem) => (
                        <div key={classItem._id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                            <img src={classItem.image} alt="" className="object-cover w-full h-48" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{classItem.classname}</h3>
                                <p className="mb-2">Instructor: {classItem.instructorName}</p>
                                <p className="mb-2">Price: {classItem.price}</p>
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="px-4 py-2 rounded-md bg-red-500 text-white mr-2"
                                        onClick={() => handleDeleteClass(classItem._id)}
                                    >
                                        Delete
                                    </button>
                                    <Link to={`/dashboard/payment`}>
                                        <button
                                            className={`px-4 py-2 rounded-md bg-blue-500 text-white ${classItem.status === "paid" ? "opacity-50 cursor-not-allowed" : ""
                                                }`}
                                            disabled={classItem.status === "paid"}
                                        >
                                            {classItem.status === "paid" ? "Paid" : "Pay"}
                                        </button>
                                    </Link>
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
