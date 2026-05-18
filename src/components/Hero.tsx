import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] px-6 py-24 text-[var(--text-primary)]">
            {/* Soft glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,var(--glow),transparent_38%)]" />

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
                        NexusFlow
                    </p>

                    <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[var(--text-primary)] md:text-6xl">
                        AI workflow orchestration for modern teams.
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                        Design, automate, and monitor intelligent workflows that
                        turn requests, tasks, and decisions into reliable
                        operational systems.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("workflow")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--text-primary)] px-6 py-4 font-medium text-[var(--bg)] transition hover:scale-[1.01]"
                        >                            View Workflow
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </button>

                        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-4 font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface)]">
                            <Play size={18} />
                            Explore System
                        </button>
                    </div>
                </motion.div>

                <WorkflowCard />
            </div>
        </section>
    );
}

function WorkflowCard() {
    const nodes = [
        "Request",
        "AI Analysis",
        "Priority",
        "Assign",
        "Notify",
        "Summary",
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl"
        >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--glow)] blur-3xl" />

            <div className="relative mb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm text-[var(--text-muted)]">
                        Workflow
                    </p>

                    <h2 className="text-xl font-medium text-[var(--text-primary)]">
                        Client Request Intake
                    </h2>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-500 dark:text-emerald-300">
                    Active
                </span>
            </div>

            <div className="relative grid gap-4">
                {nodes.map((node, index) => (
                    <motion.div
                        key={node}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.08 }}
                        className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-medium text-[var(--text-primary)]">
                                {node}
                            </p>

                            <span className="text-xs text-[var(--accent)]">
                                Step {index + 1}
                            </span>
                        </div>

                        {index !== nodes.length - 1 && (
                            <div className="absolute -bottom-4 left-8 h-4 w-px bg-[var(--accent)]/40" />
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Hero;