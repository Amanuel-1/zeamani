"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  const handleNavigation = (section: string) => {
    if (pathName === "/") {
      const targetElement = document.querySelector(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${section}`);
    }
  };

  return (
    <header className="fixed inset-0 top-4 flex flex-col md:flex-row items-center md:justify-between w-full max-h-fit mx-auto z-50 px-4">
      {/* Logo */}
      <div className=" rounded-[10px] border border-gray-800/50 bg-black/5 px-2 text-xs font-bold leading-tight text-gray-100 backdrop-blur-sm sm:gap-3 z-[110]">
        <p className="text-sm p-0 m-0 font-extrabold">AMANU-EL</p>
      </div>
      {/* Top Right Links */}
      <div className=" z-[100]  sm:px-6">
        <div className="flex gap-3 md:gap-6 rounded-[10px] border border-gray-800/50 bg-black/30 md:bg-black/20 text-sm text-gray-400 backdrop-blur-sm sm:gap-3 px-4 py-1">
          <button
            onClick={() => handleNavigation("#experience")}
            className="transition hover:text-gray-400"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => handleNavigation("#projects")}
            className="transition hover:text-gray-400"
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleNavigation("#articles")}
            className="transition hover:text-gray-400"
          >
            ARTICLES
          </button>
          <button
            onClick={() => handleNavigation("#about")}
            className="transition hover:text-gray-400"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNavigation("#contact")}
            className="transition hover:text-gray-400"
          >
            CONNECT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// Hamburger Component (for mobile)
const Hamburger = ({ isOpen, Open }: { isOpen: boolean; Open: (value: boolean) => void }) => {
  const handleClick = async () => {
    Open(!isOpen);
  };

  return (
    <button
      className="md:hidden z-50 flex w-10 h-10 justify-center items-center"
      onClick={handleClick}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          d="M5 8H27M5 16H27M5 24H27"
          strokeWidth={3}
          className="stroke-zinc-950 dark:stroke-stone-100"
        />
      </svg>
    </button>
  );
};
