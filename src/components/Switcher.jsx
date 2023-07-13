import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../components/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(true); // Set the initial value to true for dark mode

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
