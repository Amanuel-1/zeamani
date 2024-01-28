"use client"
import { Images } from 'fireup/app/resources'
import { motion } from 'framer-motion'
import React from 'react'
import { FaMap } from 'react-icons/fa'
import Image from 'next/image'
import { api } from 'fireup/trpc/server'
import { GuestBook } from '@prisma/client'
import moment from 'moment'
import Link from 'next/link'

const GuestsList =({guests}:{guests:GuestBook[]}) => {
  
  return (
    <div className="signlist w-full md:w-[60%] flex flex-col gap-6  px-3 justify-center self-center items-center">
    {
      guests && guests.map((signature:GuestBook,ind:number)=>(
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}

         key={ind} className="relative w-full min-h-[8rem] pt-14 pb-3 px-3 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700">
          <div  className="guestAvatar absolute top-1 left-1 p-2 flex flex-row gap-3 justify-center items-center">
            <img src={signature.avatar} alt='' className='h-[40px] w-[40px] rounded-full  border-2 border-stone-400'/>
            <Link href={signature.profileUrl} ><p className='p-0 m-0 h-full font-bold hover:underline'>{signature.guestName}</p>
            </Link>
            <span>•</span>
            <small>{moment(signature.createdAt).format('DD MMM YYYY')}</small>
          </div>
          <div className="message m-0 p-0">
            <small>{signature.content}</small>
          </div>
          <div className="location m-0 w-full px-2 pt-3">
            <small className='flex gap-4 items-center justify-start'><FaMap/>{signature.country}</small>
          </div>
        </motion.div>
      ))
    }
  </div>
  )
}

export default GuestsList