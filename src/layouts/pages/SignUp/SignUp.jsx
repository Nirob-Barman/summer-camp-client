import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { saveUser } from "../../../apis/auth";
import 'daisyui/dist/full.css';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch, // Add watch to get the value of confirm password field
    } = useForm();
    const [error, setError] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const password = watch("password", ""); // Get the value of the password field
    const confirmPasswordErrorMessage = "Passwords do not match"; // Error message for confirm password validation

    const validateConfirmPassword = (value) => {
        if (value === password) {
            return true;
        }
        return confirmPasswordErrorMessage;
    };

    const onSubmit = (data) => {
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);

            // reset();
            // Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'User created successfully.',
            //     showConfirmButton: false,
            //     timer: 1500
            // });
            // navigate('/');

            updateUserProfile(data.name, data.photoURL)
                .then(() => {

                    saveUser(loggedUser);
                    navigate(from, { replace: true });

                    // const saveUser = { name: data.name, email: data.email };
                    // console.log("User updated", saveUser);

                    // fetch('https://smc-server.vercel.app/users', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(saveUser)
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         if (data.insertedId) {
                    //             reset();
                    //             Swal.fire({
                    //                 // position: 'top-end',
                    //                 position: 'center',
                    //                 icon: 'success',
                    //                 title: 'User created successfully.',
                    //                 showConfirmButton: false,
                    //                 timer: 1500,
                    //             });
                    //             navigate('/');
                    //         }
                    //     })
                })
                .catch((error) => console.log(error))
        });
    };

    return (
        // <div className="pt-20 pb-3 flex justify-center items-center min-h-screen bg-gray-100">
        //     <div className="bg-white rounded-lg p-8 shadow-md">
        //         <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        //             <div>
        //                 <label className="sr-only">Name</label>
        //                 <input
        //                     type="text"
        //                     {...register("name", { required: true })}
        //                     name="name"
        //                     placeholder="Name"
        //                     className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500"
        //                 />
        //                 {errors.name && (
        //                     <p className="text-red-600 text-sm">Name is required</p>
        //                 )}
        //             </div>

        //             <div>
        //                 <label className="sr-only">Email</label>
        //                 <input
        //                     type="email"
        //                     {...register("email", { required: true })}
        //                     name="email"
        //                     placeholder="Email"
        //                     className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500"
        //                 />
        //                 {errors.email && (
        //                     <p className="text-red-600 text-sm">Email is required</p>
        //                 )}
        //             </div>

        //             <div>
        //                 <label className="sr-only">Password</label>
        //                 <input
        //                     type="password"
        //                     {...register("password", {
        //                         required: true,
        //                         minLength: 6,
        //                         maxLength: 20,
        //                         pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
        //                     })}
        //                     placeholder="Password"
        //                     className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500"
        //                 />
        //                 {errors.password?.type === "required" && (
        //                     <p className="text-red-600 text-sm">Password is required</p>
        //                 )}
        //                 {errors.password?.type === "minLength" && (
        //                     <p className="text-red-600 text-sm">
        //                         Password must be 6 characters
        //                     </p>
        //                 )}
        //                 {errors.password?.type === "maxLength" && (
        //                     <p className="text-red-600 text-sm">
        //                         Password must be less than 20 characters
        //                     </p>
        //                 )}
        //                 {errors.password?.type === "pattern" && (
        //                     <p className="text-red-600 text-sm">
        //                         Password must have one uppercase, one lowercase, one number, and one special character.
        //                     </p>
        //                 )}
        //             </div>

        //             <div>
        //                 <label className="sr-only">Confirm Password</label>
        //                 <input
        //                     className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500"
        //                     placeholder="Confirm Password"
        //                     type="password"
        //                     name="confirm"
        //                     id=""
        //                     required
        //                     {...register("confirm", {
        //                         required: true,
        //                         validate: validateConfirmPassword,
        //                     })}
        //                 />
        //                 {errors.confirm && (
        //                     <p className="text-red-600 text-sm">{errors.confirm.message}</p>
        //                 )}
        //             </div>

        //             <div>
        //                 <label className="sr-only">Photo URL</label>
        //                 <input
        //                     type="text"
        //                     {...register("photoURL", { required: true })}
        //                     placeholder="Photo URL"
        //                     className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500"
        //                 />
        //                 {errors.photoURL && (
        //                     <p className="text-red-600 text-sm">Photo URL is required</p>
        //                 )}
        //             </div>

        //             <p className="text-red-600">{error}</p>
        //             <div className="flex items-center justify-center mt-6">
        //                 <button
        //                     type="submit"
        //                     className="bg-blue-500 text-white rounded-md py-3 px-6 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
        //                 >
        //                     Register
        //                 </button>
        //             </div>
        //         </form>
        //         <p className="text-sm text-center mt-4">
        //             Already have an account?{" "}
        //             <Link to="/login" className="text-rose-500 hover:text-rose-700">
        //                 Login
        //             </Link>
        //         </p>
        //         <SocialLogin />
        //     </div>
        // </div>

        <div className="container">
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-lg">

                    <div className="signup-card">
                        <h1 className="title text-center py-2">Sign Up</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    className="input"
                                />
                                {errors.name && <p className="error-message">Name is required</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="Email"
                                    className="input"
                                />
                                {errors.email && <p className="error-message">Email is required</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    placeholder="Password"
                                    className="input"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="error-message">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="error-message">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="error-message">
                                        Password must be less than 20 characters
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="error-message">
                                        Password must have one uppercase, one lowercase, one number, and one
                                        special character.
                                    </p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm">Confirm Password</label>
                                <input
                                    type="password"
                                    {...register("confirm", {
                                        required: true,
                                        validate: validateConfirmPassword
                                    })}
                                    placeholder="Confirm Password"
                                    className="input"
                                />
                                {errors.confirm && (
                                    <p className="error-message">{errors.confirm.message}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="photoURL">Photo URL</label>
                                <input
                                    type="text"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input"
                                />
                                {errors.photoURL && (
                                    <p className="error-message">Photo URL is required</p>
                                )}
                            </div>

                            <p className="error-message">{error}</p>

                            <div className="form-group flex justify-center">
                                <button type="submit" className="button bg-green-500 hover:bg-green-600 text-blue-900 border border-blue-900 px-4 py-2">
                                    Register
                                </button>
                            </div>



                        </form>

                        <p className="text-center">
                            Already have an account?{" "}
                            <a href="/login" className="link">
                                Login
                            </a>
                        </p>

                        <div className="social-login">
                            <p>Sign up using:</p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;
