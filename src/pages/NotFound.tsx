import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
            <div className="max-w-lg text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
                    404 Error
                </p>

                <h1 className="text-5xl font-semibold">
                    Page not found
                </h1>

                <p className="mt-4 text-slate-400">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}