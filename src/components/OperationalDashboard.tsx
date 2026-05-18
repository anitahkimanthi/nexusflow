import { motion } from "framer-motion";
import { Activity, Bot, CheckCircle2, Workflow } from "lucide-react";

const metrics = [
    { label: "Active Workflows", value: "24", icon: Workflow },
    { label: "AI Decisions Today", value: "1,284", icon: Bot },
    { label: "Automated Tasks", value: "8.7k", icon: CheckCircle2 },
    { label: "Success Rate", value: "98.4%", icon: Activity },
];

const activity = [
    "AI routed support request to Operations",
    "Client Intake workflow completed",
    "Priority escalated for urgent request",
    "Weekly summary generated successfully",
];

function OperationalDashboard() {
    return (
        <section id="dashboard"
            className="relative overflow-hidden px-6 py-28 app-bg app-text">
            <div className="app-grid absolute inset-0 opacity-40" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 max-w-3xl"
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] app-accent">
                        Operational Dashboard
                    </p>

                    <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                        Monitor work as it moves through the system.
                    </h2>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-4">
                    {metrics.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="app-card rounded-[1.5rem] p-6"
                            >
                                <Icon className="mb-6 h-6 w-6 app-accent" />

                                <p className="text-3xl font-medium">
                                    {item.value}
                                </p>

                                <p className="mt-2 text-sm app-text-muted">
                                    {item.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="app-card rounded-[2rem] p-6">
                        <h3 className="mb-6 text-xl font-medium">
                            Live Activity
                        </h3>

                        <div className="space-y-4">
                            {activity.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 rounded-2xl bg-[var(--surface)] p-4"
                                >
                                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                                    <p className="app-text-secondary">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="app-card rounded-[2rem] p-6">
                        <h3 className="mb-6 text-xl font-medium">
                            System Health
                        </h3>

                        <div className="space-y-5">
                            {["Routing", "Automation", "AI Analysis"].map(
                                (item, index) => (
                                    <div key={item}>
                                        <div className="mb-2 flex justify-between text-sm">
                                            <span className="app-text-secondary">
                                                {item}
                                            </span>
                                            <span className="app-accent">
                                                {96 - index * 3}%
                                            </span>
                                        </div>

                                        <div className="h-2 rounded-full bg-[var(--surface)]">
                                            <div
                                                className="h-2 rounded-full bg-[var(--accent)]"
                                                style={{
                                                    width: `${96 - index * 3}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OperationalDashboard;