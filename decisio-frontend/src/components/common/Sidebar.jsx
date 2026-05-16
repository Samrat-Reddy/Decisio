import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

import {
    FaHome,
    FaFileAlt,
    FaCheckCircle,
    FaBell,
} from "react-icons/fa";

function Sidebar() {
    const { user } = useAuth();

    const roleMenus = {

        student: [
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: <FaHome />,
            },
            {
                name: "Requests",
                path: "/requests",
                icon: <FaFileAlt />,
            },
            {
                name: "Notifications",
                path: "/notifications",
                icon: <FaBell />,
            },
        ],

        mentor: [
            {
                name: "Dashboard",
                path: "/dashboard",
                icon: <FaHome />,
            },
            {
                name: "Approvals",
                path: "/approvals",
                icon: <FaCheckCircle />,
            },
            {
                name: "Notifications",
                path: "/notifications",
                icon: <FaBell />,
            },
        ],

    };

    const menuItems = roleMenus[user?.role] || [];

    return (
        <div className="w-64 min-h-screen bg-white shadow-md p-4">

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-blue-600">
                    Decisio
                </h1>
                <div className="mt-2">
                    <p className="font-semibold text-gray-800">
                        {user?.name ?? "Guest"}
                    </p>

                    <p className="text-sm text-gray-500 capitalize">
                        {user?.role ?? "student"}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-2">

                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
              
              ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
            <span className="text-lg">
              {item.icon}
            </span>

                        <span>
              {item.name}
            </span>
                    </NavLink>
                ))}

            </div>
        </div>
    );
}

export default Sidebar;
