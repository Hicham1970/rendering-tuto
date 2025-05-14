"use client"

import { createContext, use, useContext } from "react";
// definir le type  for the theme
type Theme = {
    colors: {
        primary: string;
        secondary: string;
    }
}

//Definir le theme par defaut:
const defaultTheme: Theme = {
    colors: {
        primary: "#0070f3",
        secondary: "#1db954",
    }
}
// Definir le themeContext:
const ThemeContext = createContext<Theme>(defaultTheme);



export const ThemeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ThemeContext value={defaultTheme}>
            {children}
        </ThemeContext>
    );
}

// Utiliser le themeContext: 
export const useTheme = () => useContext(ThemeContext);

