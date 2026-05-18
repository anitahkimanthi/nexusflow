import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTA() {
    return (
        <section className="relative overflow-hidden px-6 py-28 app-bg app-text">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--glow),transparent_42%)]" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 text-center backdrop-blur-xl md:p-16"
            >
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] app-accent">
                    NexusFlow
                </p>

                <h2 className="mx-auto max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
                    Build workflows that think, route, and adapt.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 app-text-secondary">
                    A portfolio concept showing how AI can support operational
                    teams through automation, decisioning, and workflow
                    visibility.
                </p>

                <button className="group mt-10 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--text-primary)] px-7 py-4 font-medium text-[var(--bg)] transition hover:scale-[1.01]">
                    Explore the System
                    <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                    />
                </button>
            </motion.div>
        </section>
    );
}

export default CTA;