import { pacifico } from 'fireup/styles/Fonts'
import Image from 'next/image'
import React from 'react'
import logoicon from 'fireup/app/resources/amanapps.svg'

const Logo = () => {
  return (
    <div className='logo flex flex-row mx-auto'>
        <div className="image relative w-[50px] h-[32px]" ><Image src={logoicon} alt='logo' layout='fill' objectFit='cover'/></div>
        {/* <h1  className='text-2xl font-semibold italic text-stone-700'>AmanApps</h1> */}
    </div>
  )
}

export default Logo
