"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Category, SGallery, SProject } from "fireup/lib/types";
import Card from "../shared/cards/card";
import Image from "next/image";
import { urlForImage } from "fireup/lib/image";
import { shortener } from "fireup/lib/utils";
import PortableTextEditor from "../sanity/portableText";
import moment from "moment";
import { FaLocationDot, FaStopwatch } from "react-icons/fa6";
import { getImageDimensions } from "@sanity/asset-utils";

const ImageDialog = ({ value ,isInline }: { value:any,isInline:boolean }) => 
   { 
    const {width, height} = getImageDimensions(value)
    return (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <img
        src={urlForImage(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // paddingLeft:"2rem",
          // paddingRight:"2rem",
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
          cursor: "pointer",
        }}
        className="px-3 transition-all duration-500 hover:brightness-75 md:px-[2rem]"
      />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className=" data-[state=open]:animate-overlayShow fixed inset-0 z-50 h-fit overflow-clip rounded-lg " />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed w-full h-screen flex justify-center items-center rounded-[16px] border border-gray-800/50 bg-black/10 p-[25px]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] backdrop-blur-md focus:outline-none  z-[110]">
        <div className="md:w-[80%]">
        <img
          className="col-span-1 h-auto max-w-full cursor-pointer rounded-lg object-contain md:object-cover  object-center py-2 transition-all duration-700 hover:brightness-75"
          src={urlForImage(value).url()}
          alt={"gallery-photo"}
        />
        </div>

        <div className="mt-[25px] flex justify-end"></div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none text-xl font-bold border border-900/50 bg-black/10"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

   }
export default ImageDialog;
