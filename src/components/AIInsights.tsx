import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, TrendingUp } from "lucide-react";

const insights = [
    {
        title: "Repeated approval delays detected",
        text: "NexusFlow identified recurring bottlenecks in approval steps and recommends routing high-priority requests earlier.",
        icon: BrainCircuit,
    },
    {
        title: "Task routing improved",
        text: "AI-assisted routing reduced manual assignment by analyzing request type, urgency, and team capacity.",
        icon: TrendingUp,
    },
    {
        title: "Automated summaries generated",
        text: "Operational updates are summarized automatically so teams can act faster with less context switching.",
        icon: Sparkles,
    },
];

function AIInsights() {
    return (
        <section id="insights"
            className="relative overflow-hidden px-6 py-28 app-bg app-text">
            <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] app-accent">
                        AI Insights
                    </p>

                    <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                        Intelligence that explains what changed.
                    </h2>

                    <p className="mt-7 max-w-xl text-lg leading-8 app-text-secondary">
                        NexusFlow surfaces useful signals from operational data,
                        helping teams understand delays, repeated patterns, and
                        opportunities for automation.
                    </p>
                </motion.div>

                <div className="grid gap-5">
                    {insights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 28 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.08,
                                }}
                                className="app-card rounded-[1.75rem] p-6"
                            >
                                <div className="flex gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface)] app-accent">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 leading-7 app-text-muted">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default AIInsights;