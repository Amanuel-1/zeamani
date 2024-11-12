import { Images } from 'fireup/app/resources'
import { rubikMarker } from 'fireup/styles/Fonts'
import {LightningBoltIcon} from '@radix-ui/react-icons'
import styles from 'fireup/styles/card.module.css'
import Image from 'next/image'
import React from 'react'
import { Me } from 'fireup/lib/constants'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import { FaCoffee, FaFile, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IoMdDocument } from 'react-icons/io'
import { TbCoffee } from 'react-icons/tb'
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi'

const HeroSection = () => {
  return (
    <section className='flex flex-col justify-start px-2 md:px-24 gap-4 min-h-[25rem] md:min-h-[90vh] mt-[20vh]'>
        <div className="flex flex-col gap-4 text-md w-full h-full text-center md:text-left">
            
            <div className='flex flex-col'>
            <div className="flex flex-row align-text-bottom items-start justify-center md:justify-start">
          
  


            <h1 className='text-lg md:text-4xl dark:text-[#838080] '>
              Ayoo! This is Amanuel Garomsa
            </h1>
            </div>
            <div/>
            {/* bg-clip-text bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent */}
            <h1 className=" text-stone-500 text-3xl md:text-6xl font-extrabold animate-gradient dark:text-stone-300">ML Engineer + FullStack Developer</h1> 
            <p className='text-base text-center md:text-left px-1 md:w-[60%]'>
            Experienced Full-Stack Developer and Machine Learning Engineer dedicated to building impactful web applications and intelligent ML solutions. Driven by innovation, quality, and customer satisfaction, I deliver scalable, user-centered software that meets modern needs.
             </p>
            </div>
       <div className="flex flex-wrap gap-4 md:gap-[1rem] justify-start items-center p-2 md:p-0 w-full md:w-[60%] text-stone-900 dark:text-stone-300 ">
          
          <button className='relative bg-secondary border rounded-full border-stone-600  dark:border-none w-full md:w-fit p-4 font-semibold text-lg transition-all duration-700 hover:border-stone-900 hover:bg-stone-800/50 '><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.documents.resume}><IoMdDocument/></Link></button>
          <button className='relative bg-secondary border rounded-full border-stone-600  dark:border-none w-full md:w-fit p-4 font-semibold text-lg transition-all duration-700 hover:border-stone-900 hover:bg-stone-800/50 '><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.linkedIn}><FaLinkedinIn/></Link></button>
          <button className='relative bg-secondary border rounded-full border-stone-600  dark:border-none w-full md:w-fit p-4 font-semibold text-lg transition-all duration-700 hover:border-stone-900 hover:bg-stone-800/50 '><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.github}><FaGithub/></Link></button>
          <button className='relative bg-secondary border rounded-full border-stone-600  dark:border-none w-full md:w-fit p-4 font-semibold text-lg transition-all duration-700 hover:border-stone-900 hover:bg-stone-800/50 '><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.yebuna}><GiCoffeeBeans/></Link></button>
          <button className='relative bg-secondary border rounded-full border-stone-600  dark:border-none w-full md:w-fit p-4 font-semibold text-lg transition-all duration-700 hover:border-stone-900 hover:bg-stone-800/50 '><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.buyMeCoffe}><FaCoffee/></Link></button>
        </div>
        </div>
    </section>
  )
}

export default HeroSection



