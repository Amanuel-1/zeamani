
import Link from "next/link";
import ogImg from "fireup/app/resources/og.png"
import moment from 'moment';

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
import Card from "fireup/app/_components/shared/cards/card";
import Text from "fireup/app/_components/shared/cards/Text";

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
  const previousImages = (await parent).openGraph?.images ?? []
 
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
  const projects  = await api.project.getAll.query()
  const session = await getServerAuthSession();

  const query = groq`*[_type == "post"] {
          ...,
          author->,
          categories[]->
        }
        `
  const result:SPost[]  = await client.fetch(query,{next:{
    tags:["post"]
  }})
  

  const post1= result[0] as SPost
  // console.log("this is the image url for the first post",urlForImage(post1.).url())

  return (
    <main className="">
      <HeroSection/>
      {/* <Image src={Images.jellyfish} alt="" height={100} width={100}/> */}
      <div className="parent grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:px-24  gap-4 p-10 h-full">
        {
          
        result.length && result.map((post:SPost,i:number )=>(
            <Link key={i} className="justify-stretch" href={`/${post.slug.current}`}  >
              <Card  >
                <div className="image relative w-full p-2 h-[1rem] lg:h-[2rem] xl:h-[8rem] overflow-hidden transition-all duration-700 ">
                        <Image className="hover:scale-105 " src={urlForImage(post.mainImage).url()} alt={"Image Alt"} objectFit="cover" layout="fill" />
                        <div className="absolute inset-0 backdrop-brightness-50 backdrop-contrast-125"></div>
                        {/* <Image src={urlForImage(post.mainImage).url()} alt="" objectFit='cover' layout='fil' /> */}
                </div>
                
                <Link href={`/${post.slug.current}`}><div className="title w-full text-center text-2xl font-bold">{post.title}</div></Link>
                <div className="author text-xs font-light">{post.author.name}</div>
                <div className="description text-sm font-light py-2 ">{shortener(post.description,50)}</div>

                <div className="categories w-full p-3 flex flex-wrap gap-4 text-xs">
                {
                  post.categories && post.categories.map((category:Category)=>(
                    <div key={category._id} className="tags px-4 py-2 bg-stone-900 text-stone-50 hover:hue-rotate-15 ">
                      {category.title}
                    </div>
                  ))
                }
                </div>
            </Card>
            </Link>

        ))

        }
      </div>

      <h1 className="text-4xl font-extrabold px-10">Behold ! the recent <b className="text-amber-700">posts</b></h1>
        {/* <div className="grid grid-cols-3 p-10 gap-4 ">
        {
          projects && projects.map((proj,ind)=>(
            <div className="flex flex-col gap-4 justify-center items-center  w-full bg-stone-800 text-stone-400">
              {
                <>
                              <div className="image relative w-full p-2 h-[10rem] lg:h-[12rem] xl:h-[16rem] overflow-hidden transition-all duration-700 ">
                      <Image className="hover:scale-105" src={proj.coverImage as string} alt={"Image Alt"} objectFit="cover" layout="fill" />
                      <Image src={urlForImage(proj.coverImage).url()} alt="" objectFit='cover' layout='fil' />
              </div>
              <div key={ind}><h1 className="text-2xl font-extrabold">{proj.title}</h1>
                <p className="">{shortener(proj.description,200)}</p>
                <ul className="flex flex-wrap gap-2 justify-center items-center w-ful">
                  {
                  proj.tags && proj.tags.map((singleTag,i)=>(
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
        </div> */}
        <div className="flex flex-col gap-3 w-full px-2 md:px-20 lg-px-24">
          {
            result.length && (result.slice(0,5).map((post,i)=>(
              <div key={i} className="relative flex flex-col w-full rounded-[5px] bg-stone-800 p-3 ">

                <h1 className="text-sm md:text-xl font-semibold text-left self-start">{post.title}</h1> 
                <small className="absolute top-0 left-2 text-xs font-light p-1 ">{moment(post._createdAt).fromNow()}</small>
                <p className="description">{shortener(post.description,100)}</p>
                  <Text/>
              </div>
              
            )
              
            
            ))
          }
        </div>

    </main>
  );
}
