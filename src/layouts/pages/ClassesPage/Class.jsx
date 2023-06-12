import React from 'react';

const Class = () => {
    // Dummy data for classes
    const classes = [
        {
            id: 1,
            name: 'Class A',
            instructor: 'John Doe',
            image: 'class1.jpg',
            availableSeats: 10,
            price: 29.99,
        },
        {
            id: 2,
            name: 'Class B',
            instructor: 'Jane Smith',
            image: 'class2.jpg',
            availableSeats: 5,
            price: 19.99,
        },
        // Add more classes as needed
    ];

    return (
        <div>
            <h1 className='pt-20'>Classes</h1>
            {classes.map((cls) => (
                <div key={cls.id} className="my-6 p-4 border">
                    <div className="flex items-center mb-4">
                        <img src={cls.image} alt={cls.name} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">{cls.name}</h2>
                            <p className="text-gray-600">Instructor: {cls.instructor}</p>
                        </div>
                    </div>
                    <p>Available seats: {cls.availableSeats}</p>
                    <p>Price: {cls.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Class;
