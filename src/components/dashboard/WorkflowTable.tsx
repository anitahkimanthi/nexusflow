import { useMemo, useState } from "react";
import { workflowsTable } from "../../data/mockDashboard";

export default function WorkflowTable() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredWorkflows = useMemo(() => {
        return workflowsTable.filter((workflow) => {
            const matchesStatus =
                filter === "All" || workflow.status === filter;

            const matchesSearch =
                workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                workflow.owner.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesStatus && matchesSearch;
        });
    }, [filter, searchQuery]);

    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                        Workflow Queue
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                        Operational Tasks
                    </h2>
                </div>

                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search workflows..."
                    className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 sm:w-64"
                />
                <div className="flex gap-2 overflow-x-auto">
                    {["All", "Running", "Completed", "Needs Review"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${filter === item
                                ? "bg-cyan-400 text-slate-950"
                                : "border border-white/10 text-slate-400 hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                    <thead>
                        <tr className="border-b border-white/10 text-sm text-slate-500">
                            <th className="pb-4 font-medium">Workflow</th>
                            <th className="pb-4 font-medium">Owner</th>
                            <th className="pb-4 font-medium">Status</th>
                            <th className="pb-4 font-medium">Priority</th>
                            <th className="pb-4 font-medium">Updated</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">
                        {filteredWorkflows.map((workflow) => (
                            <tr key={workflow.name} className="text-sm">
                                <td className="py-4 font-medium text-white">
                                    {workflow.name}
                                </td>
                                <td className="py-4 text-slate-400">
                                    {workflow.owner}
                                </td>
                                <td className="py-4">
                                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                                        {workflow.status}
                                    </span>
                                </td>
                                <td className="py-4 text-slate-400">
                                    {workflow.priority}
                                </td>
                                <td className="py-4 text-slate-500">
                                    {workflow.updated}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}