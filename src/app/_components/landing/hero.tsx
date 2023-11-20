import { Images } from 'fireup/app/resources'
import { rubikMarker } from 'fireup/styles/Fonts'
import {LightningBoltIcon} from '@radix-ui/react-icons'
import styles from 'fireup/styles/card.module.css'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex flex-col justify-start px-2 md:px-24 gap-4 min-h-[25rem] md:min-h-screen'>
        <div className="flex flex-col gap-4 text-md w-full h-full text-center md:text-left">
            
            <div className='flex flex-col'>
            <div className="flex flex-row align-text-bottom items-start justify-center md:justify-start">
            <div className="relative w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem]">
                <Image src={Images.waive} alt='waive' objectFit='cover' layout='fill' />
              </div> 
            <h1 className='text-lg md:text-4xl '>
              Hello!, I'm
            </h1>
            </div>
            <div/>
            <b className=" bg-clip-text bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent text-3xl md:text-6xl font-extrabold animate-gradient">Amanuel Garomsa,</b>
            <div className='text-sm font-light text-center px-1 md:w-[60%]'>
              an aspiring Software developer and Computer Science Student at Addis Ababa University College Of Natural And Computational Sciences. I am currently looking for jobs, so if there is a spot please consisder me . pleaase i am begging you 🥺
            </div>
            </div>
       <div className="flex flex-wrap gap-4 md:gap-[2rem] justify-start items-center p-2 md:p-0 w-full md:w-[60%] ">
          
          <button className='relative bg-stone-900 w-full md:w-fit px-6 py-3 font-semibold text-lg hover:shadow-sm hover:shadow-amber-600 transition-all duration-700'>My Resume</button>
          <button className='flex gap-2 items-center bg-stone-900 w-full md:w-fit px-6 py-3 font-semibold text-lg text-center justify-center'>LinkedIn<Image className='w-[20px] h-[20px]' src={Images.bolt} alt="bolt" height={20} width={20} /> </button>
        </div>
        </div>
    </section>
  )
}

export default HeroSection