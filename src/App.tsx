import AIInsights from "./components/AIInsights";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OperationalDashboard from "./components/OperationalDashboard";
import WorkflowBuilder from "./components/WorkflowBuilder";
import WorkflowPreview from "./components/WorkflowPreview";
import { useAppSelector } from "./redux/hooks";

function App() {
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <main className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar />
        <Hero />
        <WorkflowPreview />
        <WorkflowBuilder />
        <OperationalDashboard />
        <AIInsights />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

export default App;