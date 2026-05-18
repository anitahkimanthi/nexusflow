import { BrainCircuit, GitBranch, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "AI Decisioning",
        text: "Analyze requests, summarize context, and recommend next actions.",
        icon: BrainCircuit,
    },
    {
        title: "Workflow Logic",
        text: "Map triggers, conditions, approvals, and automated handoffs.",
        icon: GitBranch,
    },
    {
        title: "Operational Reliability",
        text: "Track runs, failures, retries, and execution history.",
        icon: ShieldCheck,
    },
    {
        title: "Team Automation",
        text: "Route work to the right people with clear context.",
        icon: Workflow,
    },
];

function WorkflowPreview() {
    return (
        <section className="border-t border-white/5 bg-slate-950 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 max-w-3xl">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                        System Capabilities
                    </p>

                    <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                        Built for intelligent operations.
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                                    <Icon size={22} />
                                </div>

                                <h3 className="mb-3 text-lg font-medium text-white">
                                    {feature.title}
                                </h3>

                                <p className="leading-7 text-slate-500">
                                    {feature.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WorkflowPreview;