'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function Card({children}:{children:React.ReactNode}) {
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
    <div
      className="group relative max-w-md rounded-xl  border bg-[rgba(26,31,62,0.24)] border-white/10  overflow-hidden shadow-2xl p-2 cursor-pointer h-full"
      onMouseMove={handleMouseMove}
    >
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
    </div>
  );
}
