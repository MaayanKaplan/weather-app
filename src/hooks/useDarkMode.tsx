import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string>("light");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  // console.log(theme);
  // const themeToggler = (): void => {
  //   theme === "light" ? setMode("dark") : setMode("light");
  //   setIsChecked(!isChecked);
  // };
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler, isChecked];
};
