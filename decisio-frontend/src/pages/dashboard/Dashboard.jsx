import {
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaFileAlt,
} from "react-icons/fa";

import StatsCard from "../../components/dashboard/StatsCard";

import RecentActivity from "../../components/dashboard/RecentActivity";

import { useAuth } from "../../context/useAuth";

function Dashboard() {

    const { user } = useAuth();

    return (
      <div className="space-y-6">

          <div>

              <h1 className="text-3xl font-bold text-gray-800">
                  Welcome, {user?.name}
              </h1>

              <p className="text-gray-500 mt-1 capitalize">
                  {user?.role} Dashboard Overview
              </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <StatsCard
                  title="Pending Requests"
                  value="12"
                  icon={<FaClock size={24} />}
                  color="bg-yellow-500"
              />

              <StatsCard
                  title="Approved Requests"
                  value="34"
                  icon={<FaCheckCircle size={24} />}
                  color="bg-green-500"
              />

              <StatsCard
                  title="Rejected Requests"
                  value="5"
                  icon={<FaTimesCircle size={24} />}
                  color="bg-red-500"
              />

              <StatsCard
                  title="Total Requests"
                  value="51"
                  icon={<FaFileAlt size={24} />}
                  color="bg-blue-500"
              />

          </div>

          <RecentActivity />

      </div>
    );
}

export default Dashboard;