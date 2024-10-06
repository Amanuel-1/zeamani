
import Featured from 'fireup/app/_components/shared/cards/Featured'
import Newsletter from 'fireup/app/_components/shared/cards/Newsletter'
import PostCard from 'fireup/app/_components/shared/cards/PostCard'
import SearchBar from 'fireup/app/_components/shared/contents/SearchBar'
import PostsList from 'fireup/app/_components/shared/contents/postsList'
import { client, sanityFetch } from 'fireup/lib/client'
import { SPost } from 'fireup/lib/types'
import { getDomain } from 'fireup/lib/utils'
import post from 'fireup/schemas/post'
import { dancing, pacifico } from 'fireup/styles/Fonts'
import { groq } from 'next-sanity'
import { Metadata, ResolvingMetadata } from 'next/types'
import React from 'react'

export async function generateMetadata(
): Promise<Metadata> {
  // read route params

 
  // fetch data
  const title =  "Zeamani Articles";
 

  const website  = getDomain()
  // optionally access and extend (rather than replace) parent metadata

 
  return {
    title: title,
    description:"Explore insightful articles on www.zeamani.com covering a wide range of topics. From tech newd to liestyle, my articles provide valuable information and perspectives. Join me for engaging reads that inform and inspire.",
    authors:[{name:"Amanuel Garomsa",url:`https://www.linkedin.com/in/amanuel-garomsa-36ba79213/`}],
    creator:"Amauel Garomsa",
    keywords:["blog","nature","technology","crypto","data mining","art","love","football","lifestyle"],
    openGraph:{
      images: ["https://images4.imagebam.com/3f/9d/09/MERRWNC_o.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description:"Explore insightful articles on www.zeamani.com covering a wide range of topics. From [briefly mention key topics/niches you cover] to [highlight another key aspect], our articles provide valuable information and perspectives. Join us for engaging reads that inform and inspire.",
      images: ["https://images4.imagebam.com/3f/9d/09/MERRWNC_o.png"],
    }
  }
}

const Articles = async() => {

    const postQuery = groq`*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
        ...,
        author->,
        categories[]->
      }  
      `
    const posts:SPost[]  = await sanityFetch({query:postQuery,tags:["post","articles"]})


  return (
    <div>

    <section className='min-h-screen  '>
        <div style={dancing.style} className="w-full flex justify-center bg-clip-text   bg-gradient-to-t from-yellow-600 via-amber-700  to-amber-800 text-transparent text-4xl md:text-6xl font-extrabold animate-gradient py-10 mt-[1rem]">Zeamani Blog</div>
        <div className="px-4 md:px-24">
          <Featured key={posts[0]?._id} post={posts[0] as SPost}/>
        </div>
        <section>
        <PostsList  posts={posts} />
      </section>

      {/* <PostsList posts={posts}/> */}

    </section>
    <Newsletter/>
    </div>
  )
}

export default Articles