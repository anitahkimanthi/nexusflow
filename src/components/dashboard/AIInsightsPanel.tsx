import { aiInsights } from "../../data/mockDashboard";

export default function AIInsightsPanel() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    AI Intelligence
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                    Operational Insights
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                    AI-generated recommendations and workflow monitoring.
                </p>
            </div>

            <div className="space-y-4">
                {aiInsights.map((insight) => {
                    const Icon = insight.icon;

                    return (
                        <div
                            key={insight.title}
                            className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 transition hover:border-cyan-400/20 hover:bg-slate-900/70"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                                    <Icon size={22} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="font-medium text-white">
                                            {insight.title}
                                        </h3>

                                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                                            {insight.impact}
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                        {insight.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}