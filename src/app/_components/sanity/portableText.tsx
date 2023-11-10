'use client'
import SyntaxHighlighter from "react-syntax-highlighter"
import {PortableText} from '@portabletext/react'
import { Block } from "fireup/lib/types"


type PortableProps = {
    body :any
}
interface CodeInputProps {
    code: string;
    language: string;
}

export const PortableTextComponents = {
    types: {
      image: ({value}:any) => <img src={value.imageUrl} />,
      callToAction: ({value, isInline}:any) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
        code:({node}:any)=>(
            <div className='my-2 w-fit h-[20rem]'>
            <SyntaxHighlighter  language={node?.language}>
                {node?.code}
            </SyntaxHighlighter>
        </div>
        )
    },
  
    marks: {
      link: ({children, value}:any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }

const PortableTextEditor = ({body}:PortableProps)=>{
    return (

        <PortableText value={body} components={PortableTextComponents}/>
    )
    
  }

export default PortableTextEditor