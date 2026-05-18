import {
    LayoutDashboard,
    Workflow,
    Bot,
    BarChart3,
    Settings,
} from "lucide-react";

const links = [
    {
        name: "Overview",
        icon: LayoutDashboard,
    },
    {
        name: "Workflows",
        icon: Workflow,
    },
    {
        name: "Automation",
        icon: Bot,
    },
    {
        name: "Analytics",
        icon: BarChart3,
    },
    {
        name: "Settings",
        icon: Settings,
    },
]
type DashboardSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: DashboardSidebarProps) {
    return (
        <>
            {isOpen && (
                <button
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
                />
            )}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-white/10 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >                {/* Logo */}
                <div className="border-b border-white/10 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                        NexusFlow
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Operations Hub
                    </h2>
                </div>

                {/* Nav */}
                <nav className="flex-1 space-y-2 p-4">
                    {links.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.name}
                                onClick={onClose}
                                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                            >
                                <Icon size={20} />
                                <span>{item.name}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="border-t border-white/10 p-6">
                    <div className="rounded-2xl bg-cyan-500/10 p-4">
                        <p className="text-sm text-cyan-300">
                            AI systems operating normally
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}