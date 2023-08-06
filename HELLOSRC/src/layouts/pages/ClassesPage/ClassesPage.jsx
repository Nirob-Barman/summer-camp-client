import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { AuthContext } from '../../../providers/AuthProvider';
import { getAllClasses } from '../../../apis/classeapi';
import { addBooking } from '../../../apis/bookings';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ClassesPage = () => {
    const { user, role } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllClasses()
            .then((classes) => {
                setClasses(classes);
            })
            .catch((error) => {
                console.error('Error fetching classes:', error);
            });
    }, []);



    const handleSelectClass = (classItem) => {
        console.log(classItem);
        if (!user) {
            alert('Please log in before selecting a course.');
            return;
        }

        // Disable selection for admin and instructor
        if (role === 'admin' || role === 'instructor') {
            return;
        }

        // Select the class by ID
        addBooking(classItem, user)
            .then(() => {

                toast.success("class booked!");
                navigate("/dashboard/classes");
            })
            .catch((error) => {
                console.error('Error selecting class:', error);
            });
    };
    return (
        
        <div>
            <Helmet>
                <title>ESA | Classes</title>
            </Helmet>

            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Classes</h2>
            </div>

            {classes.length === 0 ? (
                <p>No approved classes found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <TransitionGroup component={null}>
                        {classes.map((classItem) => (
                            <CSSTransition key={classItem._id} timeout={300} classNames="fade">
                                <div
                                    className={`bg-white rounded shadow ${classItem.availableSeats === 0 ? 'bg-red-100' : ''}`}
                                >
                                    <div className="aspect-w-1 aspect-h-1">
                                        <img
                                            src={classItem.image}
                                            alt={classItem.name}
                                            className="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                                        <p className="mb-2">Instructor: {classItem.instructorName}</p>
                                        <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
                                        <p className="mb-4">Price: {classItem.price}</p>
                                        <button
                                            className={`px-4 py-2 rounded-md bg-blue-500 text-white ${classItem.availableSeats === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                                }`}
                                            onClick={() => handleSelectClass(classItem)}
                                            disabled={classItem.availableSeats === 0 || role === 'admin' || role === 'instructor'}
                                        >
                                            {user ? 'Enroll' : 'Log in to Enrollment'}
                                        </button>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            )}
        </div>



    );
};

export default ClassesPage;
