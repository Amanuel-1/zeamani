'use client'

import { PortableText } from '@portabletext/react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PortableProps {
  body: any;
}

const PortableTextComponents = {
  types: {
    code: (props:any) => (
      <SyntaxHighlighter
        language={props.value.language}
        style={atomDark}
       
      >
        {props.value.code}
    </SyntaxHighlighter>
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