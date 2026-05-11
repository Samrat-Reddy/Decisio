import Sidebar from "../components/common/Sidebar";

function DashboardLayout({ children }) {
    return (
        <div className="flex bg-grey-100">

            <Sidebar />

            <div className="flex-1">

                <div className="bg-white shadow-sm p-4">
                    Navbar
                </div>

                <main className="p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}

export default DashboardLayout;