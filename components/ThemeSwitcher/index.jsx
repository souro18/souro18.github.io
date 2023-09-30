"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const isDark = resolvedTheme === "dark";
  return (
    <button
      className="fixed right-5 bottom-5 rounded-full p-4 bg-blue-500 outline-none"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <BsFillSunFill color="white" /> : <MdDarkMode color="white" />}
    </button>
  );
};

export default ThemeSwitcher;
