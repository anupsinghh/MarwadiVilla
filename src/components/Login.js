import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebaseConfig"; // Ensure the path is correct

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth(app);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const userData = { name: email }; // You might want to use actual user data if available
            onLogin(userData);
            navigate("/");
        } catch (err) {
            const errorMessage = getFriendlyErrorMessage(err.code);
            setError(errorMessage);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const userData = { name: result.user.displayName };
            onLogin(userData);
            navigate("/");
        } catch (err) {
            const errorMessage = getFriendlyErrorMessage(err.code);
            setError(errorMessage);
        }
    };

    const getFriendlyErrorMessage = (errorCode) => {
        switch (errorCode) {
            case 'auth/user-not-found':
                return "No account found with this email.";
            case 'auth/wrong-password':
                return "Incorrect password. Please try again.";
            case 'auth/invalid-email':
                return "Please enter a valid email address.";
            default:
                return "An error occurred. Please try again.";
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
                {error && <p className="text-red-500 mb-3 text-center" role="alert">{error}</p>}

                <form onSubmit={handleEmailLogin} className="flex flex-col mb-5">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        required
                    />
                    <button 
                        type="submit"
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                    >
                        Login with Email
                    </button>
                </form>

                <div className="flex items-center justify-between mb-4">
                    <hr className="w-1/4" />
                    <span className="text-gray-500">or</span>
                    <hr className="w-1/4" />
                </div>

                <button 
                    onClick={handleGoogleLogin} 
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full"
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
