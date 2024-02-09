import { Images } from 'fireup/app/resources'
import Image from 'next/image'
import React from 'react'

const UnderConstfuction = () => {
  return (
    <section className='w-full h-screen flex flex-col gap-1 justify-center items-center px-2'>
            <Image src={Images.meltingFace} className='h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]' alt='' />
            <h4 className="m-0">Under Construction</h4>
            <p className="text-xs px-4 md:text-base">This page is under construction. Come back soon.</p>
            <p className="text-xs px-4 md:text-base">go to <a href="/" className='text-amber-700 font-bold'>home</a></p>
            
    </section>
  )

}

export default UnderConstfuction