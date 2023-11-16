'use client'
import PortableTextEditor from 'fireup/app/_components/sanity/portableText'
import { client } from 'fireup/lib/client'
import { urlForImage } from 'fireup/lib/image'
import { SPost, Slug } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'
import Image from 'next/image'
import LikeButton from 'fireup/app/_components/sanity/likeButton'
import MyPortableText from 'fireup/app/_components/sanity/portableText'



type postProps  = {
    params:{
        slug:string
    }
}
const PostPage = async ({params:{slug}}:postProps) => {


    const query  = groq`*[_type=="post" && slug.current == $slug]{
        ...,
        author->,
        categories[]->
    }[0]`

    const post:SPost  = await client.fetch(query,{slug,caches:null})
    console.log("yeeeeeeeeyyy this is the current post",post)

  return (
    <section className='z-20 flex container px-1 md:px-24 flex-col gap-4  items-center min-h-screen w-full'>
            <div className="image container w-full ">
                <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
                    <Image src={urlForImage(post.mainImage).url()} alt={post.title} objectFit="cover" layout="fill" />
                </div>
            </div>
           <div className="content px-10 flex flex-col gap-4 justify-center w-full">
           <div className="title w-full text-5xl text-center">{post.title + "  "+ post.likes+ " likes"}</div>
            <div className="authorInfo flex flex-row gap-4 justify-start items-center">
                    <div className="authorAvatar relative h-12 w-12 p-3 ">
                        <Image  className="rounded-full border-4 border-neutral-700  cursor-pointer hover:border-stone-900 hover:drop-shadow-xl hover:shadow-amber-500 transition-all" src={urlForImage(post.author.image).url()} alt={post.title} objectFit="cover" layout="fill" />
                    </div>
                    <div className="authorName font-semibold cursor-pointer text-stone-500 hover:text-stone-50 transition-all ">
                        {post.author.name}
                    </div>
            </div>
            <div className="body w-full ">{post.description}</div>
           
            <PortableTextEditor body={post.body}/>
           </div>

            <LikeButton post={post}/>
        
    </section>
  )
}

export default PostPage