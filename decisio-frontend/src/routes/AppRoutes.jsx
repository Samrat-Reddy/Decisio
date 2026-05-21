import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Requests from "../pages/requests/Requests";
import Approvals from "../pages/approvals/Approvals";
import Notifications from "../pages/notifications/Notifications";
import CreateRequest from "../pages/requests/CreateRequest";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute.jsx";

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

                <Route
                    path="/requests/create"
                    element={
                        <ProtectedRoute>

                            <DashboardLayout>
                                <CreateRequest />
                            </DashboardLayout>

                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
);
}

export default AppRoutes;