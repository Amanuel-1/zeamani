
import PortableTextEditor from 'fireup/app/_components/sanity/portableText'
import { client } from 'fireup/lib/client'
import { urlForImage } from 'fireup/lib/image'
import { SPost, Slug } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'
import Image from 'next/image'
import LikeButton from 'fireup/app/_components/sanity/likeButton'
import MyPortableText from 'fireup/app/_components/sanity/portableText'
import { Site } from 'fireup/site.config'
import { Metadata, ResolvingMetadata } from 'next'
import { getDomain } from 'fireup/lib/utils'
import ShareBar from 'fireup/app/_components/sanity/shareBar'



type postProps  = {
    params:{
        slug:string
    }
}
export async function generateMetadata(
    { params }: postProps,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug  = params.slug
    const query  = groq`*[_type=="post" && slug.current == $slug]{
        ...,
        author->,
        categories[]->
    }[0]`

    const post:SPost  = await client.fetch(query,{slug},{tag:"post"})
    console.log("yeeeeeeeeyyy this is the current post",post)
   
    // fetch data
    const title =  post.title;
   
    const imageData = urlForImage(post.mainImage).url()// Assuming this holds the base64-encoded image data
    const avatar  = urlForImage(post.author.image).url()
    const website  = getDomain()
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images ?? []
   
    return {
      title: post.title,
      description:post.description.slice(0,200),
      authors:[{name:post.author.name +"",url:`${website}/${post.author.name}`}],
      creator:"Amauel Garomsa",
      keywords:["blog","nature","technology","crypto","data mining","art","love","football","lifestyle"],
      openGraph:{
        images: [`${website}/api/og?title=${post.title}&author=${post.author.name}&image=${imageData}&avatar=${avatar}`, ...previousImages],
      },
      twitter: {
        card: "summary_large_image",
        title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
        description:post.description,
        images: [ `${website}/api/og?title=${post.title}&author=${post.author.name}&image=${imageData}&avatar=${avatar}` ],
      }
    }
  }
  
const PostPage = async ({params:{slug}}:postProps) => {


    const query  = groq`*[_type=="post" && slug.current == $slug]{
        ...,
        author->,
        categories[]->
    }[0]`

    const post:SPost  = await client.fetch(query,{slug},{next:{
      tags:["post"],
      revalidate:180000
    }})
    console.log("yeeeeeeeeyyy this is the current post",post)

  return (
    <>

    <section className='z-20 flex container px-1 md:px-36 flex-col gap-4  items-center min-h-screen w-full '>
            <div className="image container w-full ">
                <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
                    <Image src={urlForImage(post.mainImage).url()} alt={post.title} objectFit="cover" layout="fill" />
                </div>
            </div>
           <div className="content px-10 flex flex-col gap-4 justify-center w-full">
           <h1 className="title w-full text-5xl text-center">{post.title + "  "+ post.likes+ " likes"}</h1>
            <div className="authorInfo flex flex-row gap-4 justify-start items-center">
                    <div className="authorAvatar relative h-12 w-12 p-3 ">
                        <Image  className="rounded-full border-4 border-neutral-700  cursor-pointer hover:border-stone-900 hover:drop-shadow-xl hover:shadow-amber-500 transition-all" src={urlForImage(post.author.image).url()} alt={post.title} objectFit="cover" layout="fill" />
                    </div>
                    <div className="authorName font-semibold cursor-pointer text-stone-500 hover:text-stone-50 transition-all ">
                        {post.author.name}
                    </div>
            </div>
            <div className="body w-full rounded-br-[20px] z-50">{post.description}</div>
           
            <PortableTextEditor  body={post.body}/>
           </div>
            <LikeButton slug={post.slug.current}/>
           {/* this is a social media share button  */}
            
          

            {/* this is a social media share button  */}
        
        
    </section>
    <div className="relative lg:fixed  flex top-0 left-0 justify-center lg:justify-start xl:w-[100%] items-center lg:min-h-screen w-full lg:w-[6rem] z-10 pointer-events-none">
                <ShareBar post={post}/>
    </div>
    </>
  )
}

export default PostPage