"use client";

import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useHasMounted } from "../utils/hydration";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;
  return (
    <div className="theme-selector flex flex-row w-fit items-center justify-center">
      <button onClick={() => setTheme("light")}>
        <Icon
          icon="ph:sun-duotone"
          width="2rem"
          className={clsx(theme === "light" ? "scale-150" : "scale-100")}
          style={{ transition: "transform 300ms ease" }}
        />
      </button>
      <div className="themeID px-2">
        <Icon
          icon={theme === "light" ? "ph:lightbulb-duotone" : "ph:lightbulb"}
          width="1.25rem"
          color={theme === "light" ? "#8dfb00" : "#aa00ff"}
          className="stroke-gray-700 dark:stroke-gray-900"
          style={{
            filter:
              theme === "light"
                ? "drop-shadow(0 0 2px #d1ef9a)"
                : "drop-shadow(0 0 2px #aa00ff)",
            strokeWidth: "5px",
            transition: "all 500ms ease",
            marginLeft: "2px"
          }}
        />
      </div>
      <button onClick={() => setTheme("dark")}>
        <Icon
          icon="ph:moon-stars-duotone"
          width="2rem"
          className={clsx(theme === "dark" ? "scale-125" : "scale-100")}
          style={{ transition: "transform 300ms ease" }}
        />
      </button>
    </div>
  );
};

export default ThemeSwitch;
