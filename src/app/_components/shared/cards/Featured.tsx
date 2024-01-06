'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";
import { cn } from "fireup/lib/ ";
import { urlForImage } from "fireup/lib/image";
import { getDomain, shortener } from "fireup/lib/utils";
import post from "fireup/schemas/post";
import moment from "moment";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";
import { SPost } from "fireup/lib/types";

export default function Featured({post}:{post:SPost}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="relative border-none overflow-hidden  rounded-xl">
      
      <Image className="hover:brightness-75 group-hover:brightness-100" src={urlForImage(post.mainImage).url()} alt={"post image"} objectFit="cover" layout="fill" />
      <div className="absolute inset-0 pointer-events-auto w-full h-full bg-gradient-to-r from-[rgb(17,17,17)] via-[rgba(28,27,21,0.81)] to-transparent"></div>
      <div
      className={`group relative w-full rounded-xl  border bg-transparent border-white/10  overflow-hidden shadow-2xl cursor-pointer h-full`}
      onMouseMove={handleMouseMove}
    >
      {(
          <>
       <motion.div
        className="pointer-events-none absolute  -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              520px circle at ${mouseX}px ${mouseY}px,
              rgba(255,19,55,0.09),
              transparent 100%
            )
          `,
        }}
      />
            <Link className='' href={`${getDomain()}/${post.slug.current}`}>
                    <div className={cn("flex flex-col gap-4 p-2 justify-end items-start  w-full h-[12rem] md:h-[25rem] bg-transparent text-stone-200")}>
                        {
                        <>
                            <div className="image relative w-full overflow-hidden transition-all duration-700 ">
                            {/* <Image className="hover:scale-105" src={post.coverImage as string} alt={"Image Alt"} objectFit="cover" layout="fill" /> */}
                            
                            </div>
                            <div>
                            <div className="px-8">
                            <h1 className="w-full font-extrabold group-hover:text-white text-stone-200 transition-all duration-700">{post.title}</h1>
                        <p className="text-border text-clip text-stone-300 font-semibold">{shortener(post.description,500)}</p>
                            </div>
                        <small className='absolute top-0 right-0 flex flex-row gap-1 justify-center items-center px-4 py-1 bg-[rgba(255,67,67,0.62)] backdrop-blur-sm rounded-bl-[15px]'><FaFire className="text-red-400" />featured</small>
                        {/* <ul className="flex flex-wrap gap-2 justify-center items-center w-ful">
                            {
                            post.tags && post.tags.map((singleTag,i)=>(
                            <li key={i} className="px-2 py-1 bg-stone-700 boder border-stone-600 text-sm font-semibold">{singleTag.name}</li>
                            ))
                        } 
                        </ul> */}
                        
                        </div>
                        </>
                        
                        }

                    </div>
            </Link>
      </>
        )
      }
    </div>
    </div>
  );
}
