import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

import { login } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("client@nexusflow.ai");
    const [password, setPassword] = useState("demo123");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};


        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        // Demo credentials
        if (
            email === "client@nexusflow.ai" &&
            password === "demo123"
        ) {
            dispatch(
                login({
                    name: "Demo Client",
                    email,
                    role: "Operations Manager",
                })
            );

            navigate("/dashboard");
        } else {
            setErrors(newErrors);
        }
    };



    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            <motion.form
                onSubmit={handleLogin}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            >
                <div className="mb-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                        <LogIn size={22} />
                    </div>

                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                        NexusFlow Workspace
                    </p>

                    <h1 className="mt-3 text-3xl font-semibold">
                        Welcome back
                    </h1>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        Sign in to access the operational dashboard and workflow analytics.
                    </p>
                </div>

                {/* Demo Credentials */}
                <div className="mb-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                    <p className="text-sm font-medium text-cyan-200">
                        Demo Credentials
                    </p>

                    <div className="mt-3 space-y-1 text-sm text-slate-300">
                        <p>Email: client@nexusflow.ai</p>
                        <p>Password: demo123</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Email address"
                        className={`w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 border ${errors.email
                            ? "border-rose-500"
                            : "border-white/10"
                            }`}
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-rose-400">
                            {errors.email}
                        </p>
                    )}

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                        className={` ${errors.password
                            ? "border-rose-500"
                            : "border-white/10"
                            } w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400`}
                    />

                    {errors.password && (
                        <p className="mt-2 text-sm text-rose-400">
                            {errors.password}
                        </p>
                    )}

                    <button className="w-full rounded-xl bg-cyan-400 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                        Access Dashboard
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Don’t have access?{" "}
                    <Link
                        to="/register"
                        className="text-cyan-400 transition hover:text-cyan-300"
                    >
                        Create account
                    </Link>
                </p>
            </motion.form>
        </main>
    );
}