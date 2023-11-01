import { Images } from 'fireup/app/resources'
import { rubikMarker } from 'fireup/styles/Fonts'
import {LightningBoltIcon} from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex flex-col justify-start px-24 gap-4'>
        <div className="flex flex-col gap-4 text-md">
            
            <div className='flex flex-col'>
            <div className="flex flex-row items-start">
            <div className="relative w-[2rem] h-[2rem]">
                <Image src={Images.waive} alt='waive' objectFit='cover' layout='fill' />
              </div> 
            <h1 className='text-4xl'>
              Hello!, I'm
            </h1>
            </div>
            <div/>
            <b className=" bg-clip-text bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent text-6xl font-extrabold animate-gradient">Amanuel Garomsa,</b>
            <div className='text-sm font-light md:w-[60%]'>
              an aspiring Software developer and Computer Science Student at Addis Ababa University College Of Natural And Computational Sciences. I am currently looking for jobs, so if there is a spot please consisder me . pleaase i am begging you 🥺
            </div>
       </div>
       <div className="flex flex-wrap gap-4 md:gap-[2rem] justify-start items-center w-[60%] ">
          <button className='bg-stone-900 w-full md:w-fit px-6 py-3 font-semibold text-lg'>My Resume</button>
          <button className='flex gap-2 items-center bg-stone-900 w-full md:w-fit px-6 py-3 font-semibold text-lg '>LinkedIn<Image className='w-[20px] h-[20px]' src={Images.bolt} alt="bolt" height={20} width={20} /> </button>
        </div>
        </div>
    </section>
  )
}

export default HeroSection