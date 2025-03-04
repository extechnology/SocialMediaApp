import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {

    // Access the theme context
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Sun className="h-5 w-5 transition-all" />
            ) : (
                <Moon className="h-5 w-5 transition-all" />
            )}
        </Button>
    );

    
};

export default ThemeToggle;