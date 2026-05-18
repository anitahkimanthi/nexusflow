import { useAppSelector } from "../../../redux/hooks";

export default function Settings() {
    const user = useAppSelector((state) => state.auth.user);

    return (
        <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Settings
                </p>

                <h1 className="mt-3 text-4xl font-semibold">
                    Workspace Settings
                </h1>

                <p className="mt-4 max-w-2xl text-slate-400">
                    Manage profile details, workspace preferences, and dashboard access.
                </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <h2 className="text-2xl font-semibold">Profile</h2>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-2xl font-semibold text-slate-950">
                            {user?.name?.charAt(0) || "D"}
                        </div>

                        <div>
                            <p className="font-medium">{user?.name || "Demo Client"}</p>
                            <p className="text-sm text-slate-400">
                                {user?.email || "client@nexusflow.ai"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <h2 className="text-2xl font-semibold">Preferences</h2>

                    <div className="mt-6 space-y-4">
                        {[
                            "Email workflow alerts",
                            "AI optimization reports",
                            "Weekly performance summary",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/40 p-4"
                            >
                                <span className="text-sm text-slate-300">{item}</span>

                                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                                    Enabled
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}