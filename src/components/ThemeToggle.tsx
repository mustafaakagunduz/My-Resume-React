import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-4 right-4 p-2 rounded-lg     transition-all"
        >
            {theme === "dark" ? (
                <Sun size={20} className="text-slate-300" />
            ) : (
                <Moon size={20} className="text-slate-700" />
            )}
        </button>
    );
}