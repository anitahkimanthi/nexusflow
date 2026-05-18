import { dashboardMetrics } from "../../../data/mockDashboard";
import MetricCard from "../MetricCard";
import PerformanceChart from "../PerformanceChart";
import SystemHealth from "../SystemHealth";

export default function Analytics() {
    return (
        <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Analytics
                </p>

                <h1 className="mt-3 text-4xl font-semibold">
                    Operational Analytics
                </h1>

                <p className="mt-4 max-w-2xl text-slate-400">
                    Track workflow throughput, automation performance, and system health.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {dashboardMetrics.map((metric) => (
                    <MetricCard key={metric.title} {...metric} />
                ))}
            </div>

            <PerformanceChart />

            <SystemHealth />
        </div>
    );
}