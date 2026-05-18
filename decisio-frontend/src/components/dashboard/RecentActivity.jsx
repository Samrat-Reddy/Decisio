const activities = [
    {
        id: 1,
        request: "Student Leave Request",
        status: "Approved",
        approver: "Mentor",
    },
    {
        id: 2,
        request: "Budget Approval",
        status: "Pending",
        approver: "HOD",
    },
    {
        id: 3,
        request: "Event Permission",
        status: "Rejected",
        approver: "Dean",
    },
];

function RecentActivity() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center justify-between mb-4">

                <h2 className="text-xl font-bold text-gray-800">
                    Recent Activity
                </h2>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                    <tr className="text-left border-b">

                        <th className="py-3">
                            Request
                        </th>

                        <th className="py-3">
                            Status
                        </th>

                        <th className="py-3">
                            Current Approver
                        </th>

                    </tr>

                    </thead>

                    <tbody>

                    {activities.map((activity) => (

                        <tr
                            key={activity.id}
                            className="border-b last:border-none"
                        >

                            <td className="py-4">
                                {activity.request}
                            </td>

                            <td className="py-4">

                  <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                      
                    ${
                          activity.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : activity.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                      }`}
                  >
                    {activity.status}
                  </span>

                            </td>

                            <td className="py-4">
                                {activity.approver}
                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default RecentActivity;