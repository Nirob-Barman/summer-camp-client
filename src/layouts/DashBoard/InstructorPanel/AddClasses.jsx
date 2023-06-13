import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddClasses = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddClass = (event) => {

        event.preventDefault();

        const classname = event.target.classname.value;
        const image = event.target.image.value;
        const instructorName = event.target.instructorName.value;
        const instructorEmail = event.target.instructorEmail.value;
        const availableSeats = event.target.availableSeats.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const status = "pending";

        const classData = {
            classname,
            image,
            instructorName,
            instructorEmail,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            description,
            status,
        };
        //  post  data to server
        addClass(classData)
            .then((data) => {
                console.log(data);
                toast.success("class Added!");
                navigate("/dashboard/myclasses");
            })
            .catch((err) => console.log(err));
    };
    return (


        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
            <form onSubmit={handleAddClass} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control">
                        <label htmlFor="className" className="label">
                            Class Name:
                        </label>
                        <input
                            type="text"
                            id="className"
                            name="className"
                            className="input input-primary"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="classImage" className="label">
                            Class Image:
                        </label>
                        <input
                            type="text"
                            id="classImage"
                            name="image"
                            className="input input-primary"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control">
                        <label htmlFor="instructorName" className="label">
                            Instructor Name:
                        </label>
                        <input
                            type="text"
                            id="instructorName"
                            name="instructorName"
                            value={user?.displayName}
                            readOnly
                            className="input input-primary"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="instructorEmail" className="label">
                            Instructor Email:
                        </label>
                        <input
                            type="email"
                            id="instructorEmail"
                            name="instructorEmail"
                            value={user?.email}
                            readOnly
                            className="input input-primary"
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="availableSeats" className="label">
                        Available Seats:
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        name="availableSeats"
                        className="input input-primary"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="price" className="label">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="input input-primary"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                        Add Class
                    </button>
                </div>
            </form>
        </div>


    );
};

export default AddClasses;
