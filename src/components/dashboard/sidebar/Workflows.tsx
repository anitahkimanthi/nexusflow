import ActiveWorkflows from "../ActiveWorkflows";
import QuickActions from "../QuickActions";
import WorkflowTable from "../WorkflowTable";

export default function Workflows() {
    return (
        <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Workflows
                </p>

                <h1 className="mt-3 text-4xl font-semibold">
                    Workflow Management
                </h1>

                <p className="mt-4 max-w-2xl text-slate-400">
                    Create, monitor, and optimize automation workflows across teams.
                </p>
            </div>

            <QuickActions />

            <ActiveWorkflows />

            <WorkflowTable />
        </div>
    );
}