import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

import { login } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { getRegisteredUsers } from "../helpers/AuthHelpers";

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

        const users = getRegisteredUsers();

        const registeredUser = users.find((user) => user.email === email);

        if (!registeredUser) {
            setErrors({ email: "Incorrect email or password" });
            return;
        }

        if (registeredUser.password !== password) {
            setErrors({ password: "Wrong password" });
            return;
        }

        dispatch(
            login({
                name: "Demo Client",
                email,
                role: "Operations Manager",
            })
        );

        navigate("/dashboard");
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
                        <p className="mt-0 text-sm text-rose-400">
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