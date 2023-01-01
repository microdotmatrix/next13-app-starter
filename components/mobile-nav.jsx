"use client";

import { useRef } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useStore } from "../lib/store";
import { useClickAway } from "react-use";
import { useHasMounted } from "../utils/hydration";

export const useMobileNav = () => {
  const { navOpen, navClose, toggleNav } = useStore((store) => ({
    navOpen: store.navOpen,
    navClose: store.navClose,
    toggleNav: store.toggleNav,
  }));
  return { navOpen, navClose, toggleNav };
};

const NavToggle = ({ children }) => {
  const { navOpen, navClose, toggleNav } = useMobileNav();
  const ref = useRef(null);
  useClickAway(ref, () => {
    if (navOpen) {
      navClose();
    }
  });
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;
  return (
    <div ref={ref}>
      <button
        className="group relative right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        onClick={() => toggleNav(!navOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {navOpen ? (
          <Icon icon="mdi:close" width="1.5rem" />
        ) : (
          <Icon icon="mdi:menu" width="1.5rem" />
        )}
      </button>

      <div
        
        className={clsx("overflow-y-auto lg:static lg:block", 
          navOpen ? "fixed left-0 right-0 mt-4 bg-gray-200 grid place-content-center text-center" : "hidden"
        )}
        style={{
          blockSize: "60vh",
          width: "100%",
          zIndex: 1000
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default NavToggle;
