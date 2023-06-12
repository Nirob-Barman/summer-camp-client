import React, { useState, useEffect } from 'react';

const ClassesPage = () => {
    const [classes, setClasses] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdminOrInstructor, setIsAdminOrInstructor] = useState(false);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch('/api/classes');
                const data = await response.json();
                setClasses(data);
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };

        const checkLoginStatus = async () => {
            try {
                const response = await fetch('/api/check-login');
                const data = await response.json();

                setIsLoggedIn(data.isLoggedIn);
                setIsAdminOrInstructor(data.isAdminOrInstructor);
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };

        fetchClasses();
        checkLoginStatus();
    }, []);

    const handleSelect = (classId) => {
        if (!isLoggedIn) {
            alert('Please log in before selecting the course.');
            return;
        }

        if (isAdminOrInstructor) {
            alert('You are not allowed to select this course as an admin or instructor.');
            return;
        }

        // Handle class selection logic here
        alert(`Selected class with ID ${classId}`);
    };

    return (
        <div>
            <h1 className='pt-20'>Classes</h1>
            {classes.map((cls) => (
                <div
                    key={cls.id}
                    className={`my-6 p-4 border ${cls.availableSeats === 0 ? 'bg-red-200' : ''}`}
                >
                    <div className="flex items-center mb-4">
                        <img
                            src={cls.image}
                            alt={cls.name}
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-lg font-bold">{cls.name}</h2>
                            <p className="text-gray-600">Instructor: {cls.instructor}</p>
                        </div>
                    </div>
                    <p>Available seats: {cls.availableSeats}</p>
                    <p>Price: {cls.price}</p>
                    <button
                        onClick={() => handleSelect(cls.id)}
                        disabled={cls.availableSeats === 0 || isAdminOrInstructor}
                        className="btn mt-4"
                    >
                        {isLoggedIn ? 'Select' : 'Log in to Select'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ClassesPage;
