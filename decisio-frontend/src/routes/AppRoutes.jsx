import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Requests from "../pages/requests/Requests";
import Approvals from "../pages/approvals/Approvals";
import Notifications from "../pages/notifications/Notifications";

import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    }
                />

                <Route
                    path="/requests"
                    element={
                        <DashboardLayout>
                            <Requests />
                        </DashboardLayout>
                    }
                />

                <Route
                    path="/approvals"
                    element={
                        <DashboardLayout>
                            <Approvals />
                        </DashboardLayout>
                    }
                />

                <Route
                    path="/notifications"
                    element={
                        <DashboardLayout>
                            <Notifications />
                        </DashboardLayout>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;