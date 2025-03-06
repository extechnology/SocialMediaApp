import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {

    // Access the theme context
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="default"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Sun className="h-8 w-8 transition-all" />
            ) : (
                <Moon className="h-8 w-8 transition-all" />
            )}
        </Button>
    );

    
};

export default ThemeToggle;