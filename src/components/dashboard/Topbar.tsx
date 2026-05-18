import { Bell, Search, Menu, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { toggleTheme } from "../../redux/themeSlice";

type DashboardTopbarProps = {
    onMenuClick: () => void;
};


export default function Topbar({ onMenuClick }: DashboardTopbarProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const theme = useAppSelector((state) => state.theme.mode);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-white/10 bg-white/80 px-4 py-4 text-slate-950 backdrop-blur-xl dark:bg-slate-950/80 dark:text-white lg:px-6">            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400">
            <button
                onClick={onMenuClick}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 lg:hidden"
            >
                <Menu size={18} />
            </button>
            <Search size={18} />
            <input
                type="text"
                placeholder="Search workflows..."
                className="bg-transparent outline-none placeholder:text-slate-500"
            />
        </div>

            <div className="flex items-center gap-4">


                <div className="relative">
                    <button
                        onClick={() => setIsNotificationsOpen((prev) => !prev)}
                        className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
                    >
                        <Bell size={18} />

                        <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-cyan-400" />
                    </button>
                    {isNotificationsOpen && (
                        <div className="absolute right-0 top-14 z-50 w-80 rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
                            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">
                                Notifications
                            </p>

                            <div className="space-y-3">
                                {[
                                    "Client onboarding workflow completed.",
                                    "AI detected a delay in approval tasks.",
                                    "Automation success rate increased to 96.8%.",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/5 bg-white/[0.04] p-3 text-sm text-slate-300"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* <button
                    onClick={() => dispatch(toggleTheme())}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
                >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button> */}

                <div className="relative">
                    <button
                        onClick={() => setIsUserMenuOpen((prev) => !prev)}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">
                            {user?.name?.charAt(0) || "D"}
                        </div>

                        <div className="hidden text-left sm:block">
                            <p className="text-sm font-medium">
                                {user?.name || "Demo Client"}
                            </p>

                            <p className="text-xs text-slate-400">
                                {user?.role || "Operations Manager"}
                            </p>
                        </div>
                    </button>

                    {isUserMenuOpen && (
                        <div className="absolute right-0 top-14 z-50 w-64 rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
                            <div className="mb-4 border-b border-white/10 pb-4">
                                <p className="font-medium">
                                    {user?.name || "Demo Client"}
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    {user?.email || "client@nexusflow.ai"}
                                </p>
                            </div>

                            <button className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                                Profile
                            </button>

                            <button className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                                Workspace Settings
                            </button>

                            <button
                                onClick={handleLogout}
                                className="mt-2 w-full rounded-2xl px-4 py-3 text-left text-sm text-rose-300 transition hover:bg-rose-500/10"
                            >
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}