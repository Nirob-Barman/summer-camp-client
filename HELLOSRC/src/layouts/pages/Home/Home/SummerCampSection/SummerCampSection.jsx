import React from 'react';

const SummerCampSection = () => {
    return (
        <section className="bg-yellow-300 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Summer Camp School</h2>
                    <p className="text-lg mb-8">Experience a summer filled with fun, learning, and unforgettable memories.</p>
                    <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default SummerCampSection;
