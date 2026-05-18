import { workflowActivity } from "../../data/mockDashboard";

export default function WorkflowActivity() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                        Live Activity
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                        Workflow Execution
                    </h2>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <p className="text-sm text-slate-400">
                        Systems Active
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                {workflowActivity.map((workflow) => (
                    <div
                        key={workflow.name}
                        className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/40 p-4 transition hover:border-cyan-400/20 hover:bg-slate-900/70"
                    >
                        <div>
                            <h3 className="font-medium text-white">
                                {workflow.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-400">
                                {workflow.type}
                            </p>
                        </div>

                        <div className="text-right">
                            <div
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${workflow.status === "Completed"
                                    ? "bg-emerald-400/10 text-emerald-300"
                                    : workflow.status === "Running"
                                        ? "bg-cyan-400/10 text-cyan-300"
                                        : "bg-amber-400/10 text-amber-300"
                                    }`}
                            >
                                {workflow.status}
                            </div>

                            <p className="mt-2 text-xs text-slate-500">
                                {workflow.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}