"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
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
       {/* Logo */}
       <div className="fixed left-4 top-4 rounded-[10px] border border-gray-800/50 bg-black/5 px-2 text-xs font-bold leading-tight  text-gray-100 backdrop-blur-sm sm:gap-3 z-[110]">
          <p className='text-sm p-0 m-0 font-extrabold'>AMANU-EL</p>
        </div>
       {/* Top Right Links */}
       <div className="fixed right-4 top-4 z-[100] px-12 sm:px-6">
          <div className="flex gap-6 rounded-[10px] border border-gray-800/50 bg-black/5 px-2 text-sm text-gray-400 backdrop-blur-sm sm:gap-3">
            <Link href="#experience" className="transition hover:text-gray-400">
              EXPERIENCE
            </Link>
            <Link href="#projects" className="transition hover:text-gray-400">
              PROJECTS
            </Link>
            <Link href="#articles" className="transition hover:text-gray-400">
              ARTICLES
            </Link>
            <Link href="#about" className="transition hover:text-gray-400">
              ABOUT
            </Link>
            <Link href="#contact" className="transition hover:text-gray-400">
              CONNECT
            </Link>
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
