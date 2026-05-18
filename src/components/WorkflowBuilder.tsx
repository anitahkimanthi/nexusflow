import { motion } from "framer-motion";
import {
    BrainCircuit,
    Bell,
    CheckCircle2,
    Layers3,
    Sparkles,
    Users,
} from "lucide-react";

const workflow = [
    {
        title: "Request Intake",
        description: "Capture operational requests from teams and clients.",
        icon: Layers3,
        color: "text-cyan-400",
    },
    {
        title: "AI Analysis",
        description: "Analyze intent, urgency, and workflow context.",
        icon: BrainCircuit,
        color: "text-violet-400",
    },
    {
        title: "Team Assignment",
        description: "Automatically route work to the correct team.",
        icon: Users,
        color: "text-emerald-400",
    },
    {
        title: "Notifications",
        description: "Notify stakeholders and generate updates.",
        icon: Bell,
        color: "text-amber-400",
    },
    {
        title: "Task Execution",
        description: "Track approvals, actions, and workflow progress.",
        icon: CheckCircle2,
        color: "text-sky-400",
    },
    {
        title: "AI Summary",
        description: "Generate insights and operational summaries.",
        icon: Sparkles,
        color: "text-pink-400",
    },
];

function WorkflowBuilder() {
    return (
        <section
            id="workflow"
            className="relative overflow-hidden px-6 py-28 app-bg app-text"
        >            {/* Grid */}
            <div className="app-grid absolute inset-0 opacity-40" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[0.85fr_1.15fr]">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] app-accent">
                        Workflow Builder
                    </p>

                    <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                        Visual orchestration for intelligent operations.
                    </h2>

                    <p className="mt-8 max-w-lg text-lg leading-8 app-text-secondary">
                        Build AI-powered workflows that automate requests,
                        decisions, approvals, and operational coordination
                        across modern teams.
                    </p>

                    <div className="mt-10 space-y-5">
                        {[
                            "AI-assisted task routing",
                            "Automated operational flows",
                            "Real-time workflow visibility",
                            "Intelligent notifications & summaries",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3"
                            >
                                <div className="h-2 w-2 rounded-full bg-cyan-400" />

                                <p className="app-text-secondary">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT */}
                <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative grid gap-6">
                        {workflow.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        x: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.08,
                                    }}
                                    className="relative"
                                >
                                    {/* Connector */}
                                    {index !== workflow.length - 1 && (
                                        <div className="absolute left-7 top-20 h-10 w-px bg-white/10" />
                                    )}

                                    <div className="app-card flex items-start gap-5 rounded-[1.75rem] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1">
                                        <div
                                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] ${item.color}`}
                                        >
                                            <Icon size={24} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 leading-7 app-text-muted">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkflowBuilder;