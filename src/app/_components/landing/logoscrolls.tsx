'use client'



import { useState } from 'react';
import { motion } from 'framer-motion';
import { Images } from 'fireup/app/resources';
import Image from 'next/image';
import Marquee from 'react-fast-marquee'

const imgs = [Images.python,Images.tensorflow,Images.react,Images.postgresql,Images.java,Images.csharp,Images.php];

const LogoScroll = () => {


  return (
    <div className="relative logo-scroll-container flex flex-row justify-center py-10 z-0">
       <ul className="relative logo-scroll-list flex flex-row w-[70%] justify-center items-center px-11">
      <div className="absolute inset-0 w-full bg-gradient-to-r from-stone-200 via-transparent to-stone-200  dark:bg-gradient-to-r dark:from-stone-950 dark:via-transparent dark:to-stone-950 z-10 pointer-events-none"></div>
        
     <Marquee pauseOnHover>
        {[...Array(2)].map((_, index) =>
          imgs.map((src, i) => (
            <li  key={index}  className='px-[10%]'>
              <Image  src={src} alt="image" className="rounded w-[3rem] h-[3rem]"  />
            </li>
          ))
        )}
      
     </Marquee>
    </ul>
    </div>
  );
};

export default LogoScroll;