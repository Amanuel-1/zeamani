import Featured from 'fireup/app/_components/shared/cards/Featured'
import PostCard from 'fireup/app/_components/shared/cards/PostCard'
import { client, sanityFetch } from 'fireup/lib/client'
import { SPost } from 'fireup/lib/types'
import post from 'fireup/schemas/post'
import { dancing, pacifico } from 'fireup/styles/Fonts'
import { groq } from 'next-sanity'
import React from 'react'

const Articles = async() => {

    const postQuery = groq`*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
        ...,
        author->,
        categories[]->
      }  
      `
    const posts:SPost[]  = await sanityFetch({query:postQuery,tags:["post","articles"]})

  return (
    <section className='min-h-screen  '>
        <div style={dancing.style} className=" w-full flex justify-center bg-clip-text bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent text-3xl md:text-6xl font-extrabold animate-gradient py-10">Amani Writes,</div>
        <div className="px-4 md:px-24">
          <Featured key={posts[0]?._id} post={posts[0] as SPost}/>
        </div>

        <div className="flex flex-wrap gap-4 px-0 w-full justify-center py-10">
          {
            posts && posts.map((post)=>(
              <PostCard className='h-[15rem] w-[30rem]' key={post._id} post={post} />
            ))
          }
        </div>

    </section>
  )
}

export default Articles