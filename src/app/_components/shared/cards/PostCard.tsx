import Image from 'next/image';
import React from 'react';
import Card from './card';
import { SPost } from 'fireup/lib/types';
import { cn, getDomain, shortener } from 'fireup/lib/utils';
import { urlForImage } from 'fireup/lib/image';
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({post,className}:{post:SPost,className?:string}) => {
  return (
<Link className='max-w-[100%] px-2 w-full md:w-1/2 my-3' href={`${getDomain()}/articles/${post.slug.current}`}>
<Card cover={urlForImage(post.mainImage).url()}>
      <div className={cn("flex flex-col gap-4 p-2 justify-stretch items-center  w-full h-[10rem] bg-transparent text-stone-400",className)}>
              {
                <>
                              <div className="image relative w-full overflow-hidden transition-all duration-700 ">
                                {/* <Image className="hover:scale-105" src={post.coverImage as string} alt={"Image Alt"} objectFit="cover" layout="fill" /> */}
                               
                              </div>
              <div>
                <h1 className="text-2xl font-extrabold group-hover:text-white text-stone-500 transition-all duration-700">{shortener(post.title,50)}</h1>
                <p className="text-border text-clip text-stone-300 font-normal">{shortener(post.description,120)}</p>
                <small className='absolute top-0 right-0 px-2 py-1 bg-[rgba(14,14,14,0.62)] backdrop-blur-sm rounded-bl-[15px]'>{moment(post._updatedAt).fromNow()}</small>
                {/* <ul className="flex flex-wrap gap-2 justify-center items-center w-ful">
                  {
                  post.tags && post.tags.map((singleTag,i)=>(
                    <li key={i} className="px-2 py-1  boder border-stone-600 text-sm font-semibold">{singleTag.name}</li>
                  ))
                } 
                </ul> */}
               
                </div>
              </>
                
              }

            </div>
</Card>
</Link>
  );
};

export default PostCard;