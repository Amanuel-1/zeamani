'use client'

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'fireup/lib/image';
import { FaCopy } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {getImageDimensions} from '@sanity/asset-utils'

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
      }}
    />
  )
}
const PortableTextComponents = {
  types: {
    'image':SampleImageComponent,
    code: (props:any) => (
     <div className="relative w-full h-full">
      <div className="absolute right-1 top-1 text-white font-extrabold p-8"><FaCopy/></div>
       <SyntaxHighlighter
        language={props.value.language}
        style={atomDark}
       
      >
        {props.value.code}
    </SyntaxHighlighter>
     </div>
    ),
    
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    
  },
  block:{
    blockquote: ({children}:any) => <blockquote className="border-l-8 border-l-stone-600">{children}</blockquote>,
  }
};

const PortableTextEditor = ({ body }: PortableProps) => {
  return (
    <PortableText value={body} components={PortableTextComponents} />
  );
};

export default PortableTextEditor;

