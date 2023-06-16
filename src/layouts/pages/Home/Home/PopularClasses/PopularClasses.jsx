import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { getAllClasses } from "../../../../../apis/classeapi";


const PopularClasses = () => {
    const { user, role } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch all approved classes from the API
        getAllClasses()
            .then((classes) => {
                // setClasses(classes);
                const sortedClasses = classes.sort(
                    (a, b) => b.availableSeats - a.availableSeats
                );
                setClasses(sortedClasses);
            })
            .catch((error) => {
                console.error("Error fetching classes:", error);
            });
    }, []);
    return (
        <div className="max-w-screen mx-auto my-10">
            {classes.length === 0 ? (
                <p className="text-center font-bold text-xl text-red-800">
                    No  classes found.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {classes.slice(0, 6).map((classItem) => (
                        <div
                            key={classItem._id}
                            className={`p-2  bg-white rounded-lg shadow-xl overflow-hidden w-96 mx-auto flex flex-col justify-between ${classItem.availableSeats === 0 ? "bg-red-300" : ""
                                }`}
                        >
                            <img src={classItem.image} alt={classItem.name} className="w-full h-[240px] rounded-lg" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                                <p className="mb-2">
                                    <span className="font-bold">Instructor: </span>
                                    {classItem.instructorName}
                                </p>
                                <p className="mb-2">
                                    <span className="font-bold">Available Seats: </span>
                                    {classItem.availableSeats}
                                </p>
                                <p className="mb-4">
                                    <span className="font-bold">Price: </span>
                                    {classItem.price} $
                                </p>
                            </div>
                        </div>
                    ))}
                    <div>
                        <button className="btn btn-primary">
                            <Link to='/classes'>See more classes</Link>
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default PopularClasses;