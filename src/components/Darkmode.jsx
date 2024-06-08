"use client";
import { IoMoonSharp } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Darkmode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <FiSun
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <IoMoonSharp
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}
