import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // <footer className="bg-gray-900 text-white py-4 mt-auto">
        <footer className="bg-blue-800 text-white py-4 mt-auto">
            <div className="container mx-auto px-4 flex flex-col h-full">
                <div className="flex-grow">
                    {/* Your main content goes here */}
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h3 className="text-xl font-semibold">Elite Sports Academy</h3>
                        <p className="mt-2">
                            123 Main Street, City, Country
                            <br />
                            Phone: (123) 456-7890
                            <br />
                            Email: info@elitesportsacademy.com
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="/" className="hover:text-gray-500">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-gray-500">
                            About Us
                        </Link>
                        <Link to="/programs" className="hover:text-gray-500">
                            Programs
                        </Link>
                        <Link to="/contact" className="hover:text-gray-500">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Elite Sports Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
