import MetricCard from "../components/dashboard/MetricCard";
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

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                                AI Monitoring
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                System Insights
                            </h2>

                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-4">
                                    <p className="text-sm font-medium text-cyan-200">
                                        Automation efficiency increased by 18%
                                    </p>

                                    <p className="mt-2 text-sm text-slate-400">
                                        Workflow optimization is improving processing speed
                                        across customer onboarding systems.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                                    <p className="text-sm font-medium text-emerald-200">
                                        AI routing operating normally
                                    </p>

                                    <p className="mt-2 text-sm text-slate-400">
                                        All automation pipelines are healthy and processing
                                        requests successfully.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}