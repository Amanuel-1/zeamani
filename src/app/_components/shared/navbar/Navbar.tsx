"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  className?: string;
};

const Navbar = (props: NavbarProps) => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  const onClick = async () => {
    setOpen(!isOpen);
  };

  return (
    <header className="w-full max-h-fit mx-auto z-50">
      <nav className="flex justify-between items-center w-full px-4 md:px-10 py-4">
        {/* Brand Section */}
        <div className="brand">
          {/* You can add your brand logo or name here */}
        </div>

        {/* Navigation Links */}
        <ul className="navItems flex gap-8 ml-auto border">
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Connect</Link>
          </li>
        </ul>
        
        {/* Hamburger Menu (visible only on mobile) */}
        <Hamburger isOpen={isOpen} Open={setOpen} />
      </nav>
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
