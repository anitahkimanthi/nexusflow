import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";

import { login } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";

export default function Register() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("client@nexusflow.ai");
    const [password, setPassword] = useState("demo123");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};

        if (!name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        dispatch(
            login({
                name,
                email,
                role: "Operations Manager",
            })
        );

        navigate("/dashboard");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
            <motion.form
                onSubmit={handleRegister}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            >
                <div className="mb-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                        <UserPlus size={22} />
                    </div>

                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                        NexusFlow Access
                    </p>

                    <h1 className="mt-3 text-3xl font-semibold">
                        Create demo account
                    </h1>

                    <p className="mt-3 text-sm text-slate-400">
                        Register to explore the operational workspace experience.
                    </p>
                </div>

                <div className="space-y-5">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 ${errors.name ? "border-rose-500" : "border-white/10"
                            }`}
                    />

                    {errors.name && (
                        <p className="text-sm text-rose-400">{errors.name}</p>
                    )}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email address"
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 ${errors.email ? "border-rose-500" : "border-white/10"
                            }`}
                    />

                    {errors.email && (
                        <p className="text-sm text-rose-400">{errors.email}</p>
                    )}

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 ${errors.password ? "border-rose-500" : "border-white/10"
                            }`}
                    />

                    {errors.password && (
                        <p className="text-sm text-rose-400">{errors.password}</p>
                    )}

                    <button className="w-full rounded-xl bg-cyan-400 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                        Create Account
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Already have access?{" "}
                    <Link to="/login" className="text-cyan-400 hover:text-cyan-300">
                        Sign in
                    </Link>
                </p>
            </motion.form>
        </main>
    );
}