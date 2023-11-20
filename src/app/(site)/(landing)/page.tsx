
import Link from "next/link";
import ogImg from "fireup/app/resources/og.png"

import { getServerAuthSession } from "fireup/server/auth";
import { api } from "fireup/trpc/server";
import { Tilt } from "react-tilt";
import styles from 'fireup/styles/card.module.css'
import { Button } from "../../_components/ui/button";
import { AlertDialogDemo } from "../../_components/shared/user/dialog";
import HoverCardDemo from "fireup/app/_components/ui/hovercard";
import { twMerge } from "tailwind-merge";
import Tiltable from "fireup/app/_components/shared/user/tiltable";
import HeroSection from "fireup/app/_components/landing/hero";
import { Images } from "fireup/app/resources";
import Image from "next/image";
import { Me } from "fireup/lib/constants";
import { Metadata, ResolvingMetadata } from "next";
import { client } from "fireup/lib/client";
import { groq } from "next-sanity";
import { Category, SPost } from "fireup/lib/types";
import { urlForImage } from "fireup/lib/image";
import { shortener } from "fireup/lib/utils";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params


  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "AmanApps",
    description:Me.bio,
    category:"website",
    keywords:["blog","nextjs","website","podcast","music","art","technology", "love","crypto","startup"],
    openGraph: {
      images: ['https://images4.imagebam.com/b2/83/ae/MEPYX81_o.png', ...previousImages],
    },
    
    twitter: {
      card: ogImg as any,
      title: 'AmanApps',
      description: Me.bio,
      site:"https://amanapps.vercel.app",
      creator: '@Amanuel_Garomsa',
      images: ['https://images4.imagebam.com/b2/83/ae/MEPYX81_o.png'],
    },
    
  }     
}

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const posts  = await api.post.getAll.query()
  const session = await getServerAuthSession();

  const result:SPost[]  =  await client.fetch(groq`*[_type == "post"] {
          ...,
          author->,
          categories[]->
        }
        `,
        {caches:null})


  const post1= result[0] as SPost
  // console.log("this is the image url for the first post",urlForImage(post1.).url())

  return (
    <main className="">
      <HeroSection/>
      {/* <Image src={Images.jellyfish} alt="" height={100} width={100}/> */}
      <div className="parent grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-4 p-10 h-full">
        {
          
        result.length && result.map((post:SPost,i:number)=>(
          <Tiltable>
              <div className="image relative w-full p-2 h-[10rem] lg:h-[12rem] xl:h-[16rem] overflow-hidden transition-all duration-700 ">
                      <Image className="hover:scale-105" src={urlForImage(post.mainImage).url()} alt={"Image Alt"} objectFit="cover" layout="fill" />
                      {/* <Image src={urlForImage(post.coverImage).url()} alt="" objectFit='cover' layout='fil' /> */}
              </div>
              
              <Link href={`/${post.slug.current}`}><div className="title w-full text-center">{post.title}</div></Link>
              <div className="author text-xs font-light">{post.author.name}</div>
              <div className="description text-sm font-light py-2 ">{shortener(post.description,50)}</div>

              <div className="categories w-full p-3 flex flex-wrap gap-4 text-xs">
              {
                post.categories && post.categories.map((category:Category)=>(
                  <div className="tags px-4 py-2 bg-stone-900 text-stone-50 hover:hue-rotate-15 ">
                    {category.title}
                  </div>
                ))
              }
              </div>
          </Tiltable>
        ))

        }
      </div>

      <h1 className="text-6xl font-extrabold px-10">Behold ! the new <b className="text-amber-700">posts</b></h1>
        <div className="grid grid-cols-3 p-10 gap-4 ">
        {
          posts && posts.map((post,ind)=>(
            <div className="flex flex-col gap-4 justify-center items-center  w-full bg-stone-800 text-stone-400">
              {
                <>
                              <div className="image relative w-full p-2 h-[10rem] lg:h-[12rem] xl:h-[16rem] overflow-hidden transition-all duration-700 ">
                      <Image className="hover:scale-105" src={post.coverImage as string} alt={"Image Alt"} objectFit="cover" layout="fill" />
                      {/* <Image src={urlForImage(post.coverImage).url()} alt="" objectFit='cover' layout='fil' /> */}
              </div>
              <div key={ind}><h1 className="text-2xl font-extrabold">{post.title}</h1>
                <ul className="flex flex-wrap gap-4">
                  {
                  post.tag && post.tag.map((singleTag,i)=>(
                    <li key={i} className="px-2 py-1 bg-stone-700 boder border-stone-600 text-sm font-semibold">{singleTag.name}</li>
                  ))
                }
                </ul>
                </div>
              </>
                
              }

            </div>
          ))
        }
        </div>

    </main>
  );
}
