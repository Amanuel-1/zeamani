"use client"
import React, { HTMLAttributes, createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';


import clsx from 'clsx';
import Logo from './Logo';
import { Container } from './container';
import { pacifico } from 'fireup/styles/Fonts';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import ThemeSelector from '../layout/themeSelector';
import { motion, useAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';



type navbarProps  ={
  darkMode: boolean,
  setDarkMode: (mode:boolean)=>void,
  className?:string
  }

  const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" }
  };
  
  const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" }
  };
  

const Navbar = (props:navbarProps) => {
  const {data:session} =useSession()
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname()

  useEffect(()=>{
    setOpen(false)
  },[pathName])

  const onClick = async () => {
    setOpen(!isOpen);
   
  };
  //navbar menu items 
  const NavItems =({mobile}:{mobile:boolean})=>(
        <motion.ul
        initial={{ opacity: 0, y: mobile ? '0%' : '-100%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '-100%' }}
        className={`${
          mobile
            ? 'flex-col gap-6 justify-center w-full h-screen bg-[rgba(219,196,164,0.25)] dark:bg-[rgba(20,10,10,0.58)] font-bold'
            : 'flex-row'
        } list-none flex items-center z-40`}
      >
            <li className="mr-2">
              <Link href="/articles">
                Articles
              </Link>
            </li>

            <li className="mr-2">
              <Link href="/me">
                Me
              </Link>
            </li>

            <li className="mr-2">
              <Link href="/guestbook">
                GuestBook
              </Link>
            </li>
            <li className="mr-2">
              <Link href="/market">
                MarketPlace
              </Link>
            </li>
            <li className="mr-2">
              <Link href="/contact">
                contact
              </Link>
            </li>

            
            <li className='mx-[1rem]'>
              <small className='flex gap-2 justify-center items-center md:pl-3'>
               
                <ThemeSelector darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
                {
                  session?.user?(
                    <div onClick={()=>signOut()} className='flex flex-row gap-1 bg-transparent items-center min-w-fit px-4 py-2 font-semibold text-stone-900 dark:text-stone-100 transition-all duration-500'><small className='hover:font-semibold cursor-pointer min-w-max hover:shadow-lg hover:shadow-yellow-600'>{session.user.name as string}</small><Image src={session.user.image as string} alt={session.user.name as string} width={25} height={25} className='rounded-[30%] p-2 boder-4 border-white hover:border-amber-950 cursor-pointer'/> </div>
                  ):(
                    <button onClick={()=>signIn('github',{redirect:true})} className='bg-transparent border border-stone-800 px-4 py-2 font-semibold text-stone-900 dark:text-stone-100 hover:bg-stone-600 hover:text-stone-100  transition-all duration-700'>login
                    </button>
                  )
                }

              </small>
            </li>
      </motion.ul>
  )

  return (
    <header className="py-4 mb-0 relative z-10 mx-auto">
      <Container>
        <nav className={`navWrapper fixed w-[90%] flex justify-between items-center ${!isOpen ? 'backdrop-blur-sm':''}`}>
          <div className="navLeft">
            <Link href="/" className="flex items-center text-body-text hover:text-stone-700 dark:hover:text-white no-underline">
              <Logo />
              <span style={pacifico.style}>{"zeamani"}</span>
            </Link>
          </div>

          <div className="">
            <Hamburger isOpen={isOpen} Open={setOpen}/>

            <div className="hidden md:flex">
                <NavItems mobile={false}/>
            </div>
            {
              isOpen && (
                <div className=" mobileView overflow-hidden fixed inset-0 w-full h-screen backdrop-blur-sm  -z-10">
                  <NavItems mobile/>
                </div>
              )
            }

          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;


const Hamburger = ({isOpen,Open}:{isOpen:boolean,Open:(value:boolean)=>void}) => {
  
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

 const handleClick = async ()=>{
      Open(!isOpen)
      if (!isOpen) {
        await path02Controls.start(path02Variants.moving);
        path01Controls.start(path01Variants.open);
        path02Controls.start(path02Variants.open);
      } else {
        path01Controls.start(path01Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
      }
 }

  return (
    <button className='md:hidden z-50 flex w-full h-full justify-center items-center' onClick={handleClick}>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          className="stroke-zinc-950 dark:stroke-stone-100 rounded-[50px]"          
          strokeWidth={3}
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          
          strokeWidth={3}
          className="stroke-zinc-950 dark:stroke-stone-100 rounded-[50px]"
        />
      </svg>
    </button>
  );
}