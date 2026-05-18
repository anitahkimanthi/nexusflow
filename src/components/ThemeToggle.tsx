import { Moon, Sun } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { toggleTheme } from "../redux/themeSlice";

function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="fixed right-6 top-6 z-50 rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}

export default ThemeToggle;