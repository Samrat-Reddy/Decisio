import { useNavigate } from 'react-router-dom';

import {FaSignOutAlt } from 'react-icons/fa';

import { useAuth } from '../../context/useAuth';

function Navbar() {

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const handleLogout = () => {

        logout();

        navigate("/");
    };

    return (
        <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">

            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Decisio Dashboard
                </h1>

                <p className="text-sm text-gray-500">
                    Workflow & Decision Automation System
                </p>
            </div>

            <div className="flex items-center gap-4">

                <div className="text-right">
                    <p className="font-semibold text-gray-800">
                        {user.name || "Guest"}
                    </p>

                    <p className="text-sm tex-gray-500 capitalize">
                        {user.role || "No Role"}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
                    >
                    <FaSignOutAlt />

                    Logout
                </button>

            </div>
        </div>
    );
}

export default Navbar;