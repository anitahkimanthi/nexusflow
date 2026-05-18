import AIInsightsPanel from "../components/dashboard/AIInsightsPanel";
import MetricCard from "../components/dashboard/MetricCard";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WorkflowActivity from "../components/dashboard/WorkflowActivity";
import { dashboardMetrics } from "../data/mockDashboard";

export default function Dashboard() {
    return (
        <main className="flex min-h-screen bg-slate-950 text-white">
            <Sidebar />

            <section className="flex flex-1 flex-col">
                <Topbar />

                <div className="flex-1 space-y-6 p-6 lg:p-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                            Operational Dashboard
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold">
                            NexusFlow Operations
                        </h1>

                        <p className="mt-4 max-w-2xl text-slate-400">
                            Monitor workflows, track operational efficiency, and orchestrate
                            intelligent automation across teams.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {dashboardMetrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </div>

                    {/* WorkflowActivity */}
                    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                        <WorkflowActivity />
                        <AIInsightsPanel />
                    </div>


                    {/* PerformanceChart */}
                    <PerformanceChart />
                </div>
            </section>
        </main>
    );
}