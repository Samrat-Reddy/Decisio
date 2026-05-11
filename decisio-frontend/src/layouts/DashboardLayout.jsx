function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">

            <div className="bg-blue-600 text-white p-4">
                Navbar
            </div>

            <div className="flex">

                <div className="w-64 bg-white shadow-md min-h-screen p-4">
                    Sidebar
                </div>

                <div className="flex-1 p-6">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default DashboardLayout;