import { systems } from "../../data/mockDashboard";

export default function SystemHealth() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                System Status
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
                Infrastructure Health
            </h2>

            <div className="mt-6 space-y-4">
                {systems.map((system) => (
                    <div
                        key={system.name}
                        className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/40 p-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className={`h-3 w-3 rounded-full ${system.color}`} />

                            <p className="text-sm text-slate-300">
                                {system.name}
                            </p>
                        </div>

                        <span className="text-sm text-slate-500">
                            {system.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}