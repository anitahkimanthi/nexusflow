import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-[var(--border)] px-6 py-10 app-bg app-text">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-medium">NexusFlow</h3>

                    <p className="mt-2 max-w-md leading-7 app-text-muted">
                        AI-powered workflow orchestration for modern operational
                        systems.
                    </p>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="flex items-center gap-4"
                >
                    <a
                        href="#"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1"
                    >
                        <BsGithub size={18} />
                    </a>

                    <a
                        href="#"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1"
                    >
                        <BsLinkedin size={18} />
                    </a>

                    <a
                        href="#"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1"
                    >
                        <Mail size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Bottom */}
            <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm app-text-muted md:flex-row md:items-center md:justify-between">
                <p>© 2026 NexusFlow. All rights reserved.</p>

                <p>Designed as an AI workflow systems concept.</p>
            </div>
        </footer>
    );
}

export default Footer;