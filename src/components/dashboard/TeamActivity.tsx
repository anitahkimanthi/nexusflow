import { activities } from "../../data/mockDashboard";

export default function TeamActivity() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Team Activity
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                    Workspace Timeline
                </h2>
            </div>

            <div className="space-y-6">
                {activities.map((activity, index) => (
                    <div
                        key={activity.user + activity.time}
                        className="flex gap-4"
                    >
                        {/* Timeline */}
                        <div className="flex flex-col items-center">
                            <div className="h-3 w-3 rounded-full bg-cyan-400" />

                            {index !== activities.length - 1 && (
                                <div className="mt-2 h-full w-px bg-white/10" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="pb-6">
                            <p className="text-sm leading-relaxed text-slate-300">
                                <span className="font-medium text-white">
                                    {activity.user}
                                </span>{" "}
                                {activity.action}
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}