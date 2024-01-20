"use client"
import React, { HTMLAttributes, createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';


import clsx from 'clsx';
import Logo from './Logo';
import { Container } from './container';
import { pacifico } from 'fireup/styles/Fonts';
import { signIn } from 'next-auth/react';
import Image from 'next/image';


const Navbar = () => {
  const {data:session} =useSession()
  return (
    <header className="py-4 mb-20 relative z-10 mx-auto">
      <Container>
        <nav className="navWrapper flex justify-between items-center">
          <div className="navLeft">
            <Link href="/" className="flex items-center text-body-text hover:text-white no-underline">
              <Logo />
              <span style={pacifico.style}>{"zeamani"}</span>
            </Link>
          </div>

          <div className="relative">
            <Hamburger />

            <ul className="hidden list-none md:flex items-center">
              <li className="mr-2">
                <Link href="/works">
                  Work
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/articles">
                  Articles
                </Link>
              </li>

              <li className="mr-2">
                <Link href="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/market">
                  MarketPlace
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <a
                  href={`${"zeamani.inc"}/rss.xml`}
                  target="_blank"
                  rel="noopener norefferer"
                >
                  RSS Feed
                </a>
              </li>
              <li className='mx-[1rem]'>
                <small>
                  {
                    session?.user?(
                      <div onClick={()=>signOut()} className='flex flex-row gap-2 bg-transparent items-center min-w-fit px-4 py-2 font-semibold text-stone-100 transition-all duration-500'><small className='hover:font-semibold cursor-pointer min-w-max hover:shadow-lg hover:shadow-yellow-600'>{session.user.name as string}</small><Image src={session.user.image as string} alt={session.user.name as string} width={25} height={25} className='rounded-[30%] p-2 boder-4 border-white hover:border-amber-950 cursor-pointer'/> </div>
                    ):(
                      <button onClick={()=>signIn('github',{redirect:true})} className='bg-transparent border border-stone-800 px-4 py-2 font-semibold text-stone-100 hover:bg-stone-600'>login
                      </button>
                    )
                  }
                </small>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;


const Hamburger = (props: HTMLAttributes<HTMLElement>) => {
  

  return (
    <button
      className={
        clsx(`
          h-4 w-8 bg-inherit block p-3 border-white border relative border-none rounded-[50%] transition-all
          cursor-pointer focus:outline-white active:outline-white before:content-[""] before:bg-white
          before:h-[2px] before:w-full before:absolute before:block before:right-0 after:content-[""] after:bg-white
          after:h-[2px] after:w-full after:absolute after:block after:right-0 md:hidden z-20 before:top-[8px] after:w-[80%] after:bottom-[8px]
        `)}
      
    />
  )
}