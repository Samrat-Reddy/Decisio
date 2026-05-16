import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/useAuth";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [name, setName] = useState("");

    const [role, setRole] = useState("student");

    const handleLogin = (e) => {

        e.preventDefault();

        const userData = {
            name,
            role,
        };

        login(userData);

        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Decisio
                </h1>

                <form
                    onSubmit={handleLogin}
                    className="space-y-4"
                >

                    <div>
                        <label className="block mb-1 font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Role
                        </label>

                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        >

                            <option value="student">
                                Student
                            </option>

                            <option value="mentor">
                                Mentor
                            </option>

                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;
