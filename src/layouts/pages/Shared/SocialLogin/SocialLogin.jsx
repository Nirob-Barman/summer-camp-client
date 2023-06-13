import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { saveUser } from "../../../../apis/auth";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log('Google user', loggedInUser);
                saveUser(loggedInUser);
                navigate(from, { replace: true });
                // const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                // fetch('http://localhost:5000/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(saveUser)
                // })
                //     .then(res => res.json())
                //     .then(() => {
                //         navigate(from, { replace: true });
                //     })

            })
        // navigate(from, { replace: true });
    }

    return (
        <div className="flex justify-center">
            <div className="w-full sm:w-auto text-center my-4">
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline"
                >
                    <FaGoogle /> Continue with Google
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;