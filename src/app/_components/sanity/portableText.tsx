'use client'

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'fireup/lib/image';
import { FaCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {getImageDimensions} from '@sanity/asset-utils'
import copy ,{ CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState } from 'react';
import { cn, extractTweetId } from 'fireup/lib/utils';
import YouTubePlayer from 'react-player/youtube';
import { Tweet } from 'react-tweet'
import { FiExternalLink } from 'react-icons/fi';
import ImageDialog from '../me/ImageDialog';
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
    <ImageDialog value={value} isInline={isInline} />
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
      <div className="relative flex flex-col w-full md:w-[90%] self-center h-full gap-0 text-xs justify-center justify-self-center place-self-center">
      <div className=" absolute -top-3 left-0 w-fit px-8 rounded-tr-[10px]  z-0 bg-black/10 border border-gray-800/50 text-stone-200">{props.value.language}</div>
      <CopyToClipboard text={props.value.code} onCopy={()=>setIsCopied(true)}>
      <div className={cn("absolute right-3 top-5 text-white font-extrabold p-2 rounded-[5px]  cursor-pointer hover:border hover:border-amber-600 transition-all duration-500 z-40 ",isCopied?"border border-green-600 hover:border-green-500 text-green-400 bg-green-950":"text-stone-100 ")} ><FaCopy/></div>
      </CopyToClipboard>
       <SyntaxHighlighter
        language={props.value.language}
        style={nightOwl}
        
       
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

    const EmbedBlock:React.FC=(props: any)=>{
      
      

      return (
        <iframe height="300" className='w-full h-[20rem]  md:h-[30rem] na md:p-4 border-none bg-transparent' title="Loader Animation - Pure CSS" src={props.value.url} loading="lazy" allowTransparency={true} allowFullScreen={true}>
          
      </iframe>
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
    twitter:TwitterBlock,
    embed:EmbedBlock

    
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a className='flex gap-1 items-center text-blue-600/80  max-w-lg hover:text-blue-600 z-50 text-sm md:text-base transition-all duration-500 group' href={value.href} rel={rel}>
          {children}<span className='group-hover:block hidden'><FiExternalLink/></span>
        </a>
      );
    },
    
  },
  block:{
    blockquote: ({children}:any) => <blockquote className="border-l-8 border border-gray-800/50 border-l-gray-600/50 bg-black/20  z-0 text-sm md:text-base backdrop-blur-md  text-gray-400 md:p-4 my-2">{children}</blockquote>,
    div:({children}:any)=><div className='z-50'>{children}</div>,
    p:({children}:any)=><h1>{children}</h1>,
    
    // a:({value,href}:any)=><a className='text-amber-700 dark:text-amber-600' href={href} target='_blank' rel="noopener noreferrer">{value}</a>,
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

