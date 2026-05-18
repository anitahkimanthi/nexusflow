import { useState } from "react";
import { actions } from "../../data/mockDashboard";
import ActionModal from "./ActionModal";

export default function QuickActions() {
    const [selectedAction, setSelectedAction] = useState<
        null | {
            title: string;
            description: string;
        }
    >(null);

    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Quick Actions
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                    Workspace Controls
                </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.title}
                            onClick={() => setSelectedAction(action)}
                            className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 text-left transition hover:border-cyan-400/30 hover:bg-slate-900/70"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400/20">
                                <Icon size={22} />
                            </div>

                            <h3 className="mt-5 font-medium text-white">
                                {action.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                {action.description}
                            </p>
                        </button>
                    );
                })}
            </div>
            {selectedAction && (
                <ActionModal
                    title={selectedAction.title}
                    description={selectedAction.description}
                    onClose={() => setSelectedAction(null)}
                />
            )}
        </div>
    );
}