
import PortableTextEditor from 'fireup/app/_components/sanity/portableText'
import { client, sanityFetch } from 'fireup/lib/client'
import { urlForImage } from 'fireup/lib/image'
import { Category, SPost, Slug } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'
import Image from 'next/image'
import LikeButton from 'fireup/app/_components/sanity/likeButton'
import MyPortableText from 'fireup/app/_components/sanity/portableText'
import { Site } from 'fireup/site.config'
import { Metadata, ResolvingMetadata } from 'next'
import ShareBar from 'fireup/app/_components/sanity/shareBar'
import AudioPlayer from 'fireup/app/_components/sanity/TTS'
import Newsletter from 'fireup/app/_components/shared/cards/Newsletter'



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
    const query  = groq`*[_type == "post" && slug.current == $slug] {
      ...,
      author->,
      categories[]->,
      "audioUrl": audio.asset -> url 
    }
    [0]`

    const post:SPost  = await client.fetch(query,{slug},{tag:"post"})
    console.log("yeeeeeeeeyyy this is the current post",post.audioUrl)
   
    // fetch data
    const title =  post.title;
   
    const imageData = urlForImage(post.mainImage).url()// Assuming this holds the base64-encoded image data
    const avatar  = urlForImage(post.author.image).url()
    const website  = "https://www.zeamani.com"
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
        title: post.title,
        description:post.description,
        images: [ `${website}/api/og?title=${post.title}&author=${post.author.name}&image=${imageData}&avatar=${avatar}` ],
      }
    }
  }
  
const PostPage = async ({params:{slug}}:postProps) => {


    const query  = groq`*[_type=="post" && slug.current == $slug]{
        ...,
        author->,
        categories[]->,
        "audioUrl": audio.asset -> url 
    }[0]`

    const post:SPost  = await sanityFetch({query:query,params:{slug},tags:["post","articles"]})
    console.log("yeeeeeeeeyyy this is the current post",post)

  return (
    <>

    <section className='z-20 flex container px-1 md:px-12 lg:px-52 flex-col gap-4  items-center min-h-screen w-full mt-12 '>
            <div className="image container w-full px-2">
                <div className="imageContainer relative w-full min-h-[15rem] md:h-[20rem] lg:h-[25rem]">
                  
                    <Image src={urlForImage(post.mainImage).url()} alt={post.title} objectFit="cover" layout="fill" />
                    <div className="absolute w-full h-full bg-gradient-to-b from-gray-900 to-transparent"></div>
                </div>
            </div>
            <h1 className="title w-full  text-left px-5   font-extrabold">{post.title}</h1>
           <div className="content px-6 flex flex-col gap-4 justify-center w-full">
            {/* <div className="authorInfogroup flex flex-row gap-4 justify-start items-center">
                    <div className="authorAvatar relative h-12 w-12 p-3 ">
                        <Image  className="rounded-full border-4 border-neutral-700  cursor-pointer hover:border-stone-900 hover:drop-shadow-xl hover:shadow-amber-500 transition-all" src={urlForImage(post.author.image).url()} alt={post.title} objectFit="cover" layout="fill" />
                    </div>
                    <div className="authorName font-semibold cursor-pointer text-stone-500 hover:text-stone-50 transition-all ">
                        {post.author.name}
                    </div>
            </div> */}
            <div className="tags w-full flex flex-wrap mb-4 gap-x-2 md:gap-x-6">{
              post.categories && post.categories.map((categ:Category,ind)=>(
                <p key={ind} className='text-gray-500 text-xs  md:text-sm dark:text-gray-500 font-bold italic m-0 p-1 bg-black/20 rounded-[10px] border border-gray-800/50 '>#{categ.title}</p>
              ))
            }</div>

            <AudioPlayer audioUrl={post.audioUrl}/>
            
           
            <PortableTextEditor  body={post.body}/>
           </div>
            
           {/* this is a like dislike button  */}
            <div className="flex items-center justify-center">
              <LikeButton post={post}/>
            </div>              
            {/* this is a like dislike button  */}
        
        
    </section>
    <div className="relative lg:fixed  flex top-0 left-0 justify-center lg:justify-start xl:w-[100%] items-center lg:min-h-screen w-full lg:w-[6rem] z-10 pointer-events-none">
                <ShareBar content={post}/>
    </div>
    <Newsletter/>
    </>
  )
}

export default PostPage