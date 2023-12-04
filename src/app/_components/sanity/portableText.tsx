'use client'

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'fireup/lib/image';
import { FaCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {getImageDimensions} from '@sanity/asset-utils'
import { CopyToClipboard } from "react-copy-to-clipboard";

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
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        cursor:'pointer'
      }}
    />
  )
}
const PortableTextComponents = {
  types: {
    'image':SampleImageComponent,
<<<<<<< HEAD
    code: (props:any) => {
      const [isCopied,setIsCopied] = useState(false)
      return(
     <div className="relative flex flex-col w-full h-full gap-0 z-50">
      {/* <div className="relative w-full h-[3rem] bg-yellow-700"></div> */}
          <CopyToClipboard text={props.value.code} onCopy={()=>setIsCopied(true)}>
          <div className={`absolute right-3 top-5 text-stone-400 font-extrabold p-2 rounded-[5px] bg-stone-800 cursor-pointer ${isCopied?'border border-green-600 bg-[rgba(10,255,10,0.18)] text-green-600 hover:border-green-800':''} hover:border hover:border-amber-600 transition-all duration-500 z-40`}><FaCopy/></div>
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
=======
    code: (props:any) => (
     <div className="relative flex flex-col w-full h-full gap-0">
      {/* <div className="relative w-full h-[3rem] bg-yellow-700"></div> */}
      <CopyToClipboard text={props.value.code} onCopy={()=>console.log("it is working . now it can copy to clipboard")}>
      <div className="absolute right-3 top-5 text-white font-extrabold p-2 rounded-[5px] bg-stone-800 cursor-pointer hover:border hover:border-amber-600 transition-all duration-500 z-40"><FaCopy/></div>
      </CopyToClipboard>
       <SyntaxHighlighter
        language={props.value.language}
        style={atomDark}
       
      >
        {props.value.code}
    </SyntaxHighlighter>
     </div>
    ),
>>>>>>> parent of a0ff9ce (styled copy-to-clipboard component)
    
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

