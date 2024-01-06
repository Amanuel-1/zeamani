import Featured from 'fireup/app/_components/shared/cards/Featured'
import PostCard from 'fireup/app/_components/shared/cards/PostCard'
import { client } from 'fireup/lib/client'
import { SPost } from 'fireup/lib/types'
import post from 'fireup/schemas/post'
import { groq } from 'next-sanity'
import React from 'react'

const Articles = async() => {

    const postQuery = groq`*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
        ...,
        author->,
        categories[]->
      }  
      `
    const posts:SPost[]  = await client.fetch(postQuery,{next:{
        tags:["post"]
    }})

  return (
    <section className='min-h-screen px-4 md:px-24'>
        <div className=" w-full flex justify-center bg-clip-text bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent text-3xl md:text-6xl font-extrabold animate-gradient py-10">Amani Writes,</div>
        <Featured key={posts[0]?._id} post={posts[1] as SPost}/>
    </section>
  )
}

export default Articles