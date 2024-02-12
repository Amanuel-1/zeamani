import React from 'react'
import HoverCardDemo from '../../ui/hovercard'
import Logo from '../navbar/Logo'
import { pacifico } from 'fireup/styles/Fonts'
import { FaTelegram ,FaDiscord,FaGithub,FaYoutube,FaLinkedinIn,FaTwitter} from "react-icons/fa";
import ThemeSelector from '../layout/themeSelector';
import Link from 'next/link';
import { Me } from 'fireup/lib/constants';


type footerProps  ={
  darkMode: boolean,
  setDarkMode: (mode:boolean)=>void,
  className?:string
  }


const Footer = (props:footerProps) => {
  return (
   <footer className='flex flex-col justiy-center items-center'>
   <div className="w-[90%] h-[2rem] mt-4 border-b border-stone-400 dark:border-stone-900"/>
   <section className="my-0 mx-auto py-0 px-[4%] flex justify-items-stretch items-center w-full ">
    
    <ul className="flex gap-2 w-full my-4 items-center text-stone-400">
        <li className="flex items-center mr-2 text-stone-700 dark:text-stone-500">
           <Logo/> 
           <small style={pacifico.style} className='font-bold text-lg'>zeamani</small>          
        </li>
        <li className=" text-stone-400">•</li>
        <li className='cursor-pointer hover:text-stone-500 dark:hover:text-stone-500 transition-all duration-700 hover:scale-105 text-stone-700 dark:stroke-stone-400'>
           <Link  className="text-stone-600 dark:text-stone-400"  href={Me.socials.discord} ><FaDiscord/></Link>
        </li>
        <li className='cursor-pointer hover:text-stone-500 dark:hover:text-stone-500 transition-all duration-700 hover:scale-105 text-stone-700 dark:stroke-stone-400'>
          <Link  className="text-stone-600 dark:text-stone-400"  href={Me.socials.github} ><FaGithub/></Link>
        </li>
        <li className='cursor-pointer hover:text-stone-500 dark:hover:text-stone-500 transition-all duration-700 hover:scale-105 text-stone-700 dark:stroke-stone-400'>
           <Link  className="text-stone-600 dark:text-stone-400"  href={Me.socials.linkedIn} ><FaLinkedinIn/></Link>
        </li>
        <li className='cursor-pointer hover:text-stone-500 dark:hover:text-stone-500 transition-all duration-700 hover:scale-105 text-stone-700 dark:stroke-stone-400'>
          <Link  className="text-stone-600 dark:text-stone-400"  href={Me.socials.youtube} ><FaYoutube/></Link>
        </li>
        <li className='cursor-pointer hover:text-stone-500 dark:hover:text-stone-500 transition-all duration-700 hover:scale-105 text-stone-700 dark:stroke-stone-400'>
          <Link  className="text-stone-600 dark:text-stone-400"  href={Me.socials.telegram} ><FaTelegram/></Link>
        </li>
      </ul>
      
      <ul className="flex m-auto my-4">
        <li className="block mr-2">
        <ThemeSelector footer={true} darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>            
        </li>
            
      </ul>
      
      </section>
    
   </footer>
  )
}

export default Footer