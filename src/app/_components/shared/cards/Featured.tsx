'use client'
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";

import { urlForImage } from "fireup/lib/image";
import { cn, getDomain, shortener } from "fireup/lib/utils";
import post from "fireup/schemas/post";
import moment from "moment";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";
import { SPost } from "fireup/lib/types";

export default function Featured({ post }: { post: SPost }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="relative border-none overflow-hidden rounded-xl">
      <Image
        className="hover:brightness-75 group-hover:brightness-100"
        src={urlForImage(post.mainImage).url()}
        alt={"post image"}
        objectFit="cover"
        layout="fill"
      />
      <div className="absolute inset-0 pointer-events-auto w-full h-full bg-gradient-to-r from-[rgb(17,17,17)] via-[rgba(28,27,21,0.81)] to-transparent"></div>
      <div
        className={`group relative w-full rounded-xl border bg-transparent border-white/10  overflow-hidden shadow-2xl cursor-pointer h-full`}
        onMouseMove={handleMouseMove}
      >
        {post && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-2"
            >
              <Link className="" href={`${getDomain()}/articles/${post.slug.current}`}>
                <div className={cn("flex flex-col gap-4 md:justify-end items-start  w-full h-[12rem] md:h-[25rem] bg-transparent text-stone-200")}>
                  <>
                    <div className="image relative w-full overflow-hidden transition-all duration-700 "></div>
                    <div>
                      <div className="md:px-8">
                        <motion.h1
                          className="w-full font-extrabold group-hover:text-white text-stone-200 text-lg md:text-4xl xl:text-5xl transition-all duration-700"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          {post.title}
                        </motion.h1>
                        <motion.p
                          className="text-border text-stone-300 md:font-semibold h-[1rem] md:h-fit text-ellipsis"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          {shortener(post.description, 500)}
                        </motion.p>
                      </div>
                      <small className="absolute top-0 right-0 flex flex-row gap-1 justify-center items-center px-4 py-1 bg-[rgba(255,67,67,0.62)] backdrop-blur-sm rounded-bl-[15px]">
                        <FaFire className="text-red-400" />
                        featured
                      </small>
                    </div>
                  </>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}