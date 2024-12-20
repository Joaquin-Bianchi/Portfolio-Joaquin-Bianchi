"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function ButtonDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  if (!mounted) {
    return <div className="ui-switch z-20 animate-fade-in animate-delay-100" />;
  }

  return (
    <label className="ui-switch z-20 animate-fade-in animate-delay-100">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleChangeTheme}
      />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

export default ButtonDarkMode;
