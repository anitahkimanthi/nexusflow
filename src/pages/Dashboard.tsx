import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function Dashboard() {
    return (
        <main className="flex min-h-screen bg-slate-950 text-white">
            <Sidebar />

            <section className="flex flex-1 flex-col">
                <Topbar />

                <div className="flex-1 p-6 lg:p-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
                        <h1 className="text-4xl font-semibold">
                            NexusFlow Operations
                        </h1>

                        <p className="mt-4 max-w-2xl text-slate-400">
                            Monitor workflows, track operational efficiency,
                            and orchestrate intelligent automation across teams.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}