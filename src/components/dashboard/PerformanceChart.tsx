import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { automationPerformance } from "../../data/mockDashboard";
import { useState } from "react";


export default function PerformanceChart() {
    const [range, setRange] = useState("7D");
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                        Performance
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                        Automation Throughput
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        Completed tasks vs automated executions this week.
                    </p>
                </div>

                <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
                    {["7D", "30D", "90D"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setRange(item)}
                            className={`rounded-full px-4 py-2 text-sm transition ${range === item
                                ? "bg-cyan-400 text-slate-950"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={automationPerformance[range as keyof typeof automationPerformance]}>                        <defs>
                        <linearGradient id="completed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                        </linearGradient>

                        <linearGradient id="automated" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                        <XAxis dataKey="day" stroke="#64748b" tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                        <Tooltip
                            contentStyle={{
                                background: "#020617",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "16px",
                                color: "#fff",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="completed"
                            stroke="#22d3ee"
                            fill="url(#completed)"
                            strokeWidth={2}
                        />

                        <Area
                            type="monotone"
                            dataKey="automated"
                            stroke="#34d399"
                            fill="url(#automated)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}