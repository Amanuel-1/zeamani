import SyntaxHighlighter from "react-syntax-highlighter";
import { PortableText } from '@portabletext/react';

interface PortableProps {
  body: any;
}

const PortableTextComponents = {
  types: {
    code: ({ node }: any) => (
      <div className='my-2 w-fit h-[20rem]'>
        <SyntaxHighlighter language={node?.language}>
          {node?.code}
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
};

const PortableTextEditor = ({ body }: PortableProps) => {
  return (
    <PortableText value={body} components={PortableTextComponents} />
  );
};

export default PortableTextEditor;