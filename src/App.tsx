import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useAppSelector } from "./redux/hooks";

function App() {
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <main className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;