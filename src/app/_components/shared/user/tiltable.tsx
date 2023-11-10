'use client'
import { SPost } from 'fireup/lib/types';
import React from 'react';
import Tilt from 'react-parallax-tilt';

// type itemProps ={
//   data:SPost
// }
const Tiltable = ({
  children
}:{children:React.ReactNode}) => {
  let icon;
  const classes = 'text-bright'
  const date  = new Date().getDate().toString()
 

  return (
    <Tilt
      scale={1}
      transitionSpeed={200}
      className=" bg-transparent border border-stone-800 text-stone-100 text-xl font-semibold w-full mb-3 p-3 cursor-pointer sm:mx-2 sm:mb-4 sm:basis-[40%] sm:flex-grow sm:flex-shrink lg:basis-[30%] "
    >
     {children}
    </Tilt>
  );
};

export default Tiltable;
