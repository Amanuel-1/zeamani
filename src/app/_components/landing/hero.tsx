import { Images } from 'fireup/app/resources'
import { rubikMarker } from 'fireup/styles/Fonts'
import {LightningBoltIcon} from '@radix-ui/react-icons'
import styles from 'fireup/styles/card.module.css'
import Image from 'next/image'
import React from 'react'
import { Me } from 'fireup/lib/constants'

const HeroSection = () => {
  return (
    <section className='flex flex-col justify-start px-2 md:px-24 gap-4 min-h-[25rem] md:min-h-[90vh] mt-[20vh]'>
        <div className="flex flex-col gap-4 text-md w-full h-full text-center md:text-left">
            
            <div className='flex flex-col'>
            <div className="flex flex-row align-text-bottom items-start justify-center md:justify-start">
          
  


            <h1 className='text-lg md:text-4xl dark:text-[#4b4949] '>
              Ayoo! This is Amanuel Garomsa
            </h1>
            </div>
            <div/>
            {/* bg-clip-text bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent */}
            <h1 className=" text-stone-500 text-3xl md:text-6xl font-extrabold animate-gradient dark:text-stone-500">I Make Organic Websites,</h1> 
            <p className='text-sm text-center md:text-left px-1 md:w-[60%]'>
                  Experienced and motivated software developer specializing 
                  in website and application software development, dedicated to 
                  delivering exceptional IT-related services. Committed to innovation, 
                  continuous improvement, and ensuring customer satisfaction through high-quality software solutions.
            </p>
            </div>
       <div className="flex flex-wrap gap-4 md:gap-[2rem] justify-start items-center p-2 md:p-0 w-full md:w-[60%] text-stone-900 dark:text-stone-300 ">
          
          <button className='relative border border-stone-600  dark:border-none w-full md:w-fit px-6 py-3 font-semibold text-lg hover:shadow-sm hover:shadow-amber-600 transition-all duration-700 hover:border-black '><a href='https://docs.google.com/uc?export=download&id=1Tzv0qv-mV0rOAyatmL_QYWD3qTToDIO3'>My Resume</a></button>
          <button className='flex gap-2 justify-center items-center relative border border-stone-600  dark:border-none w-full md:w-fit px-6 py-3 font-semibold text-lg hover:shadow-sm hover:shadow-amber-600 transition-all duration-700 hover:border-black '><a href={Me.socials.linkedIn} target="_blank" rel="noopener noreferrer" >LinkedIn</a><Image className='w-[20px] h-[20px] hover:border-black ' src={Images.bolt} alt="bolt" height={20} width={20} /> </button>
        </div>
        </div>
    </section>
  )
}

export default HeroSection



