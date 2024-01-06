'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";

export default function Card({children,cover}:{children:React.ReactNode,cover:string}) {
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
      {cover.length>4 &&(
      <>
      <Image className="brightness-50 group-hover:brightness-100" src={cover} alt={"post image"} objectFit="cover" layout="fill" />
      <div className="absolute inset-0 pointer-events-auto w-full h-full bg-gradient-to-r from-[rgb(17,17,17)] via-[rgba(28,27,21,0.88)] to-transparent"></div>
      </>
      )}
      <div
      className={`group relative w-full rounded-xl  border ${cover.length>4?"bg-transparent":"bg-[rgba(26,31,62,0.24)]"} border-white/10  overflow-hidden shadow-2xl cursor-pointer h-full`}
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
              rgba(255,149,55,0.13),
              transparent 80%
            )
          `,
        }}
      />
     {children}
          </>
        )
      }
    </div>
    </div>
  );
}
