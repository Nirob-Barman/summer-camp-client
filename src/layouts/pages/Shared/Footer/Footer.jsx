import React from 'react';
import logo from '../../../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                        <img src={logo} alt="Website Logo" className="h-8 mr-2" />
                        <h1 className="text-lg font-bold">EliteSportsAcademy</h1>
                    </div>
                    <p className="mt-2 text-sm">Unleash your athletic potential at EliteSportsAcademy. Experience top-notch training, personalized coaching, and a culture of excellence. Achieve greatness on and off the field.</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <ul className="mt-2 text-sm">
                        <li>Email: info@example.com</li>
                        <li>Phone: +1 123 456 7890</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold">Visit Us</h2>
                    <p className="mt-2 text-sm">123 Street, City, State, ZIP</p>
                </div>
            </div>
            <hr className="border-gray-800 my-6" />
            <p className="text-sm text-center bg-blue-500 text-white py-2">&copy; 2023 EliteSportsAcademy. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
