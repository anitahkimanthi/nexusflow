import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const links = [

    { name: "Workflow", href: "#workflow" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Insights", href: "#insights" },
];

function Navbar() {
    const navigate = useNavigate();

    return (
        <motion.header
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />

                    <h1 className="text-sm font-medium tracking-[0.25em]">
                        NEXUSFLOW
                    </h1>
                </div>

                {/* Links */}
                <nav className="hidden items-center gap-10 md:flex">
                    {links.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm transition app-text-secondary hover:text-[var(--text-primary)]"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-4">

                    <ThemeToggle />

                    <button className="hidden rounded-2xl bg-[var(--text-primary)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:scale-[1.01] md:block"
                        onClick={() => navigate('/register')}
                    >
                        Explore Platform
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

export default Navbar;