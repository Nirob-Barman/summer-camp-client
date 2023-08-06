
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm, Controller } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { handleSubmit, control } = useForm();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const { email, password } = data;
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
            <Helmet>
                <title>ESA | Login</title>
            </Helmet>

            <div className="container mx-auto flex justify-center items-center min-h-screen">
                <div className="max-w-md w-full">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>

                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Email"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    )}
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="Password"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    )}
                                />
                                <p className="text-xs mt-1">
                                    <Link to="#" className="text-blue-500 hover:underline">
                                        Forgot password?
                                    </Link>
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    style={{
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.25rem',
                                        border: 'none',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                    className="hover:bg-blue-700"
                                    type="submit"
                                >
                                    Login
                                </button>


                                <SocialLogin />
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
