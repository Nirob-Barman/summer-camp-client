import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { deleteBooking, getBookings } from '../../../apis/bookings';



const SelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user?.email);

    useEffect(() => {
       
        getBookings(user?.email)
            // getAllBookings()
            .then((classes) => {
                setSelectedClasses(classes);
            })
    }, []);

    const handleDeleteClass = (classId) => {
        // Remove the selected class by ID
        deleteBooking(classId)
            .then(() => {
                // Remove the class from the state
                setSelectedClasses((prevClasses) =>
                    prevClasses.filter((classItem) => classItem.id !== classId)
                );
            })
            .catch((error) => {
                console.error('Error deleting selected class:', error);
            });
    };

    return (
        <div className="max-w-2xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4 text-center">My Selected Classes</h2>
            {selectedClasses.length === 0 ? (
                <p>No selected classes found.</p>
            ) : (
                <table className="w-full bg-white border border-gray-200 rounded shadow text-center">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4">Class Name</th>
                            <th className="py-2 px-4">Instructor Name</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClasses.map((classItem) => (
                            <tr key={classItem._id} className="border-2 border-gray-200">
                                <td className="py-2 px-4">{classItem.classname}</td>
                                <td className="py-2 px-4">{classItem.instructorName}</td>
                                <td className="py-2 px-4">{classItem.price}</td>
                                <td className="py-2 px-4">
                                    <button
                                        className="px-3 py-2 rounded-md bg-red-500 text-white"
                                        onClick={() => handleDeleteClass(classItem._id)}
                                    >
                                        Delete
                                    </button>
                                    <button className="px-3 py-2 rounded-md bg-blue-500 text-white">
                                        Pay
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SelectedClasses;