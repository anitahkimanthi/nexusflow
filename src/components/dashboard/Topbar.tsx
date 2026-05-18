import { Bell, Search } from "lucide-react";

export default function Topbar() {
    return (
        <header className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
            {/* Search */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-400">
                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search workflows..."
                    className="bg-transparent outline-none placeholder:text-slate-500"
                />
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:text-white">
                    <Bell size={18} />
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">
                        D
                    </div>

                    <div>
                        <p className="text-sm font-medium">
                            Demo Client
                        </p>

                        <p className="text-xs text-slate-400">
                            Operations Manager
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}