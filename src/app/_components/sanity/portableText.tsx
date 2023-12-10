'use client'

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'fireup/lib/image';
import { FaCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {getImageDimensions} from '@sanity/asset-utils'
import copy ,{ CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from 'react';
import { cn } from 'fireup/lib/utils';

interface PortableProps {
  body: any;
}




// Barebones lazy-loaded image component
const SampleImageComponent = ({value, isInline}:any) => {
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
        paddingLeft:"2rem",
        paddingRight:"2rem",
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',
          
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        cursor:'pointer'
      }}
      className='hover:brightness-75 transition-all duration-500'
    />
  )
}
const PortableTextComponents = {
  types: {
    'image':SampleImageComponent,
    code: (props:any) => {
        const [isCopied,setIsCopied] = useState(false)
        const [copiedText,setCopiedText]= useState("")




      return(      
     <div className="relative flex flex-col w-full md:w-[90%] self-center h-full gap-0 text-sm">
      <div className=" absolute -top-3 left-0 w-fit px-8 rounded-tr-[15px] bg-stone-800">{props.value.language}</div>
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
    )
      },
    
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a className='text-amber-500 underline hover:text-amber-300 z-50' href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    
  },
  block:{
    blockquote: ({children}:any) => <blockquote className="border-l-8 border-l-amber-600 bg-[#4f342d35] z-50">{children}</blockquote>,
    div:({children}:any)=><div className='z-50'>{children}</div>,
    p:({children}:any)=><h1>{children}</h1>
  }
};

const PortableTextEditor = ({ body }: PortableProps) => {
  return (
    <PortableText  value={body} components={PortableTextComponents} />
  );
};

export default PortableTextEditor;

