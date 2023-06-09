import React from 'react';

const Banner = () => {
    return (
        <section className="bg-blue-800 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Unleash Your Athletic Potential</h1>
                    <p className="text-lg mb-8">Train with the Best, Excel in Sports</p>
                    <button className="bg-white text-blue-800 font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 ease-in-out">Join Now</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
