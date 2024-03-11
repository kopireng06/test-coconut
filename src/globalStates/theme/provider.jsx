import { useState } from "react";
import THEME from "./const";
import ThemeContext from "./context";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || THEME.light);

  const toggleTheme = () => {
    const value = theme === THEME.light ? THEME.dark : THEME.light;
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
