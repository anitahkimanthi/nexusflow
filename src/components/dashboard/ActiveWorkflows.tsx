import { workflows } from "../../data/mockDashboard";

export default function ActiveWorkflows() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Active Pipelines
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                    Workflow Progress
                </h2>
            </div>

            <div className="space-y-5">
                {workflows.map((workflow) => (
                    <div
                        key={workflow.name}
                        className="rounded-2xl border border-white/5 bg-slate-900/40 p-5"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="font-medium text-white">
                                    {workflow.name}
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    {workflow.department}
                                </p>
                            </div>

                            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                                {workflow.status}
                            </span>
                        </div>

                        <div className="mt-5">
                            <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                                <span>Progress</span>
                                <span>{workflow.progress}%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                <div
                                    style={{ width: `${workflow.progress}%` }}
                                    className="h-full rounded-full bg-cyan-400"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}