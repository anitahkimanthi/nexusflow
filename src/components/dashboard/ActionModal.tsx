import { X } from "lucide-react";

type ActionModalProps = {
    title: string;
    description: string;
    onClose: () => void;
};

export default function ActionModal({
    title,
    description,
    onClose,
}: ActionModalProps) {
    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 px-6 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                            NexusFlow Action
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            {title}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:text-white"
                    >
                        <X size={18} />
                    </button>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                    {description}
                </p>

                <button
                    onClick={onClose}
                    className="mt-8 w-full rounded-xl bg-cyan-400 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}