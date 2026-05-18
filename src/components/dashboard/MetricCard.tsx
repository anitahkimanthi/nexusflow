import type { LucideIcon } from "lucide-react";
import AnimatedMetricValue from "./AnimatedMetricValue";

type MetricCardProps = {
    title: string;
    value: string;
    change: string;
    trend: string;
    icon: LucideIcon;
};


export default function MetricCard({
    title,
    value,
    change,
    trend,
    icon: Icon,
}: MetricCardProps) {


    return (

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={22} />
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {change}
                </span>
            </div>

            <p className="text-sm text-slate-400">{title}</p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
                <AnimatedMetricValue value={value} />
            </h3>

            <p className="mt-2 text-sm text-slate-500">{trend}</p>
        </div>
    );
}