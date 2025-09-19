import { useEffect, useState } from "react";
import {FaMoon, FaSun} from "react-icons/fa";


const ThemeSwitch = () => {
  const [theme, setTheme] = useState("cyberpunk");
  useEffect (() => {
    document.body.classList.remove("cyberpunk", "normal");
    document.body.classList.add(theme);
  }, [theme]);

  const isCyberpunk = theme === "cyberpunk";

  return (
    <button
      onClick={() => setTheme(theme === "cyberpunk" ? "normal" : "cyberpunk")}
      className={`
        ml-4 px-3 py-1.5 rounded-md border flex items-center gap-2 transition
        ${isCyberpunk ? "border-white text-white hover:bg-white hover:text-black" : "border-accent text-accent hover:bg-accent hover:text-bg"}
      `}
    >
      {isCyberpunk ? (
        <>
          <FaSun className="w-4 h-4" /> Normal
        </>
      ) : (
        <>
          <FaMoon className="w-4 h-4" /> Cyberpunk
        </>
      )}
    </button>
  )
}

export default ThemeSwitch;