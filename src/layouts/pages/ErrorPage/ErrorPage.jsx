import React from "react";
import { Link, useNavigate } from "react-router-dom";
const ErrorPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h1 className="text-6xl font-bold text-red-500 mb-4 animate-spin">
                4<span className="animate-bounce">0</span>4
            </h1>
            <p className="text-2xl text-gray-600">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="btn btn-primary mt-8"
            >
                Back to Home
            </Link>
            <button className="btn btn-primary mt-8" onClick={goBack}>
                Go Back to the previous page
            </button>
        </div >
    );
};

export default ErrorPage;
