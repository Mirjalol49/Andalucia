import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import "./Darkmode.css";

const Darkmode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light"); // Get and set the theme in local storage

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <label className="toggle-label">
      <input
        className="toggle"
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggle}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Darkmode;
