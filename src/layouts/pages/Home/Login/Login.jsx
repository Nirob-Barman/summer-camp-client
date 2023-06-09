import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "User Login Successful.",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
            navigate(from, { replace: true });
        });
    };

    return (
        <>
            {/* <Helmet>
                <title>ESA | Login</title>
            </Helmet> */}

            <div className="container mx-auto flex justify-center items-center min-h-screen">
                <div className="max-w-md w-full">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <p className="text-xs mt-1">
                                    <Link
                                        to="#"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="text-center">
                        <small>
                            New Here? <Link to="/signup">Create an account</Link>
                        </small>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
