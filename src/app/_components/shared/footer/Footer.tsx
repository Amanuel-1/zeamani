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
  
   </footer>
  )
}

export default Footer