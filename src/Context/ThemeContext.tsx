import React, { createContext, useContext, useEffect, useState } from "react";


// Type for the theme
type Theme = "dark" | "light";


// Type for the context
type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};


// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);



export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {


    // State for the theme
    const [theme, setTheme] = useState<Theme>(() => {
        // Check for saved theme or user preference
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return savedTheme || (prefersDark ? "dark" : "light");

    });


    useEffect(() => {

        // Update localStorage and document class when theme changes
        localStorage.setItem("theme", theme);

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);

    }, [theme]);


    
    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };


    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );


};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
