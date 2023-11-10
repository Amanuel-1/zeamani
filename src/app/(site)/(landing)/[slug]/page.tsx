
import PortableTextEditor from 'fireup/app/_components/sanity/portableText'
import { client } from 'fireup/lib/client'
import { urlForImage } from 'fireup/lib/image'
import { SPost, Slug } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'
import Image from 'next/image'


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

    const post:SPost  = await client.fetch(query,{slug})
    console.log("yeeeeeeeeyyy this is the current post",post)

  return (
    <section className='flex container px-24 flex-col gap-4  items-center min-h-screen w-full'>
            <div className="image container px-24">
                <div className="imageContainer relative w-full min-h-[35rem]">
                    <Image src={urlForImage(post.mainImage).url()} alt={post.title} objectFit="cover" layout="fill" />
                </div>
            </div>
            <div className="title text-5xl">{post.title}</div>
            <div className="author text-lg">by {post.author.name}</div>
            <div className="body ">{post.description}</div>
           
            <PortableTextEditor body={post.body}/>
    </section>
  )
}

export default PostPage