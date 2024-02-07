'use client'

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'fireup/lib/image';
import { FaCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { atomDark ,coldarkCold,coy} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {getImageDimensions} from '@sanity/asset-utils'
import copy ,{ CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from 'react';
import { cn, extractTweetId } from 'fireup/lib/utils';
import YouTubePlayer from 'react-player/youtube';
import { Tweet } from 'react-tweet'
interface PortableProps {
  body: any;
}
interface codeComponentProps{
  props:any
}



// Barebones lazy-loaded image component
const ImageComponent = ({value, isInline}:any) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      
      src={urlForImage(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // paddingLeft:"2rem",
        // paddingRight:"2rem",
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',
          
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        cursor:'pointer'
      }}
      className='hover:brightness-75 transition-all duration-500 px-3 md:px-[2rem]'
    />
  )
}
//a component for the code part
const CodeComponent : React.FC=(props:any) => {
        const [isCopied,setIsCopied] = useState(false)
        const [copiedText,setCopiedText]= useState("")
        // const [codeTheme,setCodeTheme] = useState('dark')

        const darkTheme =  localStorage.getItem("darkTheme")






      return(      
     <div className="w-full flex justify-center my-10">
      <div className="relative flex flex-col w-full md:w-[90%] self-center h-full gap-0 text-sm justify-center justify-self-center place-self-center">
      <div className=" absolute -top-3 left-0 w-fit px-8 rounded-tr-[15px] bg-stone-800 z-0">{props.value.language}</div>
      <CopyToClipboard text={props.value.code} onCopy={()=>setIsCopied(true)}>
      <div className={cn("absolute right-3 top-5 text-white font-extrabold p-2 rounded-[5px] bg-stone-800 cursor-pointer hover:border hover:border-amber-600 transition-all duration-500 z-40 ",isCopied?"border border-green-600 hover:border-green-500 text-green-400 bg-green-950":"text-stone-100 bg-stone-600")} ><FaCopy/></div>
      </CopyToClipboard>
       <SyntaxHighlighter
        language={props.value.language}
        style={atomDark}
       
      >
        {props.value.code}
    </SyntaxHighlighter>
     </div>
     </div>
    )
    }


    const YoutubeBlock:React.FC=(props: any)=>{
      
      

      return (
        <div className="w-full flex justify-center">
          <YouTubePlayer  controls={true} url={props.value.url} />
        </div>
      )
    }

    
    const TwitterBlock:React.FC=(props:any)=>{
      return (
        <div data-theme="dark" className='flex w-full  bg-transparent justify-center'>
          <Tweet  id={extractTweetId(props.value.url) as string} />
        </div>
      )
    }


const PortableTextComponents = {
  types: {
    'image':ImageComponent,
    code: CodeComponent,
    youtube:YoutubeBlock,
    twitter:TwitterBlock

    
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a className='text-amber-500 md:text-amber-600 underline max-w-lg hover:text-amber-300 z-50 text-sm md:text-base' href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    
  },
  block:{
    blockquote: ({children}:any) => <blockquote className="border-l-8 border-l-amber-600 bg-[#4f342d1c] dark:bg-[#4f342d35] z-0 text-xs md:text-sm text-stone-900 dark:text-stone-300">{children}</blockquote>,
    div:({children}:any)=><div className='z-50'>{children}</div>,
    p:({children}:any)=><h1>{children}</h1>
  }
};

const PortableTextEditor = ({ body }: PortableProps) => {
  return (
    <article className=''>
      <PortableText  value={body} components={PortableTextComponents} />
    </article>
  );
};

export default PortableTextEditor;

