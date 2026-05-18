import AIInsightsPanel from "../AIInsightsPanel";
import QuickActions from "../QuickActions";
import WorkflowActivity from "../WorkflowActivity";

export default function Automation() {
    return (
        <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Automation
                </p>

                <h1 className="mt-3 text-4xl font-semibold">
                    AI Automation Center
                </h1>

                <p className="mt-4 max-w-2xl text-slate-400">
                    Launch, monitor, and optimize intelligent workflow automation across your operations.
                </p>
            </div>

            <QuickActions />

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <WorkflowActivity />
                <AIInsightsPanel />
            </div>
        </div>
    );
}