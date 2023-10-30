"use client"
import React, { HTMLAttributes, createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';


import clsx from 'clsx';
import Logo from './Logo';
import { Container } from './container';
import { pacifico } from 'fireup/styles/Fonts';
import { signIn } from 'next-auth/react';
import Image from 'next/image';


const Nav = () => {
  const {data:session} =useSession()
  return (
    <header className="py-4 mb-20 relative z-10 mx-auto">
      <Container>
        <nav className="navWrapper flex justify-between items-center">
          <div className="navLeft">
            <Link href="/" className="flex items-center text-body-text hover:text-white no-underline">
              <Logo />
              <span style={pacifico.style}>{"AmanApps"}</span>
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
                <Link href="/notes">
                  Notes
                </Link>
              </li>
              <li className="mr-2">
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <a
                  href={`${"AmanApps.inc"}/rss.xml`}
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
                      <button className='flex flex-row gap-4 bg-transparent border border-stone-800 px-4 py-2 font-semibold text-stone-100 hover:bg-stone-600'>{session.user.name}<Image src={session.user.image as string} alt={session.user.name as string} width={40} height={40} className='rounded-full p-2 boder-2 border-stone-800'/> </button>
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

export default Nav;


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