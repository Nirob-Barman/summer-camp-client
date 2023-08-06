import { useState, useEffect, useContext } from "react";
import { getBookings, getPayment } from "../../../../apis/bookings";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import toast from "react-hot-toast";



const PaymentPage = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user?.email);
    console.log("Payment page");

    const { id } = useParams();
    console.log(id);
    console.log("Id ", id);



    useEffect(() => {

        getBookings(user?.email)

            .then((classes) => {
                const filteredClasses = classes.filter(
                    (classItem) => classItem.status !== "paid"
                );
                setSelectedClasses(filteredClasses);
            });
    }, []);



    const handlePayment = (bookingId) => {


        getPayment(bookingId)
            .then(() => {


                toast.success("Paid success!");
                navigate("/dashboard/enrolled");
            })
            .catch((error) => {
                console.error("Error selected class:", error);
            });
    };

    return (



        <div className="flex flex-wrap justify-center">
            {selectedClasses.map((item) => (
                <div className="w-64 mx-4 my-6">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden aspect-w-1 aspect-h-1">
                        <img
                            src={item.image}
                            alt={item.classname}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-4">
                        <h4 className="text-xl font-bold mb-2">{item.classname}</h4>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-black font-bold">Price:</h4>
                            <h4>{item.price}</h4>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-black font-bold">Seats:</span>
                            <span>{item.availableSeats}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-black font-bold">Students:</span>
                            <span>20</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-black font-bold">Your Email:</span>
                            <span>{item.studentEmail}</span>
                        </div>
                        <button
                            className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white"
                            onClick={() => handlePayment(item._id)}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            ))}
        </div>



    );
};

export default PaymentPage;

