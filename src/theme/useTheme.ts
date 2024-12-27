import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const nweThem = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(nweThem);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nweThem);
  };
  return { theme, toggleTheme };
}
