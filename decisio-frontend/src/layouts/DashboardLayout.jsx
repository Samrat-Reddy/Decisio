import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function DashboardLayout({ children }) {
    return (
        <div className="flex bg-grey-100">

            <Sidebar />

            <div className="flex-1">

               <Navbar />

                <main className="p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}

export default DashboardLayout;