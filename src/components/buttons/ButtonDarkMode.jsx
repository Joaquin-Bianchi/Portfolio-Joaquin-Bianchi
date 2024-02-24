"use client";
import { useEffect, useState } from "react";

function ButtonDarkMode() {
  const [theme, setTheme] = useState(() => {
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <label className="ui-switch z-20 animate-fade-in animate-delay-100">
        <input type="checkbox" onClick={handleChangeTheme} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </>
  );
}

export default ButtonDarkMode;
