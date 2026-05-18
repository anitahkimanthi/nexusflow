import { Bell, LogOut, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Topbar() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <header className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400">
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Search workflows..."
                    className="bg-transparent outline-none placeholder:text-slate-500"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:text-white">
                    <Bell size={18} />
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">
                        {user?.name?.charAt(0) || "D"}
                    </div>

                    <div>
                        <p className="text-sm font-medium">
                            {user?.name || "Demo Client"}
                        </p>

                        <p className="text-xs text-slate-400">
                            {user?.role || "Operations Manager"}
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-rose-400/40 hover:text-rose-300"
                >
                    <LogOut size={18} />
                </button>
            </div>
        </header>
    );
}