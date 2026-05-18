import { motion } from "framer-motion";
import MetricCard from "./MetricCard";
import { dashboardMetrics } from "../../data/mockDashboard";
import WorkflowActivity from "./WorkflowActivity";
import AIInsightsPanel from "./AIInsightsPanel";
import TeamActivity from "./TeamActivity";
import PerformanceChart from "./PerformanceChart";
import SystemHealth from "./SystemHealth";
import ActiveWorkflows from "./ActiveWorkflows";
import QuickActions from "./QuickActions";
import WorkflowTable from "./WorkflowTable";

export default function Overview() {
    return (
        <main className="flex min-h-screen bg-slate-950 text-white">
            <section className="flex flex-1 flex-col">
                <div className="flex-1 space-y-6 p-6 lg:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8"
                    >
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        {dashboardMetrics.map((metric) => (
                            <MetricCard key={metric.title} {...metric} />
                        ))}
                    </motion.div>

                    {/* WorkflowActivity */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"
                    >
                        <WorkflowActivity />
                        <AIInsightsPanel />
                    </motion.div>



                    {/* PerformanceChart */}
                    <PerformanceChart />

                    {/* team activities */}
                    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                        <TeamActivity />
                        <SystemHealth />
                    </div>
                    <ActiveWorkflows />
                    <QuickActions />
                    <WorkflowTable />
                </div>
            </section>
        </main>
    );
}