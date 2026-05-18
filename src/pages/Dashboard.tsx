import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/dashboard/Topbar";
import Sidebar from "../components/dashboard/Sidebar";


export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="flex min-h-screen bg-slate-950 text-white">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <section className="flex min-w-0 flex-1 flex-col lg:pl-[280px]">
                <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

                <div className="flex-1 space-y-6 bg-slate-950 p-6 lg:p-8">
                    <Outlet />
                </div>
            </section>
        </main>
    );
}