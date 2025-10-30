import React, {createContext, useState} from 'react';

interface ThemeProviderProps{
    children: React.ReactNode;
}

type ThemeName = "light" | "dark";

export const themeContext = createContext({});

 export const  ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeName>("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
    return(
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    );
 };
