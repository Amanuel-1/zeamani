import Link from "next/link";
import ogImg from "fireup/app/resources/og.png"
import moment from 'moment';

import { getServerAuthSession } from "fireup/server/auth";
import { api } from "fireup/trpc/server";
import { Tilt } from "react-tilt";
import styles from 'fireup/styles/card.module.css'
import { Button } from "../../_components/ui/button";
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
import { Category, SPost, SProject } from "fireup/lib/types";
import { urlForImage } from "fireup/lib/image";
import { shortener } from "fireup/lib/utils";
import Card from "fireup/app/_components/shared/cards/card";
import Text from "fireup/app/_components/shared/cards/Text";
import ProjectDialog from "fireup/app/_components/landing/projectdialog";
import PostCard from "fireup/app/_components/shared/cards/PostCard";
import Timeline from "fireup/app/_components/landing/timeline";
import Project from "fireup/schemas/project";
import LogoScroll from "fireup/app/_components/landing/logoscrolls";
import { Suspense } from "react";
import Products from "fireup/app/_components/landing/products";

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
    title: "zeamani",
    description:Me.bio,
    category:"website",
    keywords:["blog","nextjs","website","podcast","music","art","technology", "love","crypto","startup"],
    openGraph: {
      images: ['https://images4.imagebam.com/4c/97/c3/MERXNNX_o.png', ...previousImages],
    },
    
    twitter: {
      card: ogImg as any,
      title: 'zeamani',
      description: Me.bio,
      site:"https://zeamani.vercel.app",
      creator: '@Amanuel_Garomsa',
      images: ['https://images4.imagebam.com/4c/97/c3/MERXNNX_o.png'],
    },
    
  }     
}



export default async function Home() {

  // const projects  = await api.project.getAll.query()
  const session = await getServerAuthSession();

  const projectQuery = groq`*[_type == "project"] {
          ...,
          author->,
          categories[]->
        }  
        `
  const postQuery = groq`*[_type == "post"]| order(_createdAt desc, _updatedAt desc)  {
    ...,
    author->,
    categories[]->
  }  
  `
  const result:SProject[]  = await client.fetch(projectQuery,{next:{
    tags:["project"]
  }})

  const posts:SPost[]  = await client.fetch(postQuery,{next:{
    tags:["post"]
    
  }})
  

  // console.log("this is the image url for the first post",urlForImage(post1.).url())

  return (
    <main className="">
      <HeroSection/>
      
      <LogoScroll/>
      <Products/>
      {/* ###########################################/ */}

      {/* <Image src={Images.jellyfish} alt="" height={100} width={100}/> */}
      <h1 className=" font-extrabold px-4 md:px-20 mt-4">Behold ! the recent <b className="text-amber-700">projects</b></h1>
      <div className="parent grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:px-24  gap-4 p-10 h-full">
        {
          
        result.length && result.map((project:SProject,i:number )=>{
          return (
            <ProjectDialog key={i} project={project}/>
          );
        })

        }
      </div>
   

      <h1 className="md:text-4xl font-extrabold px-2 md:px-20">Behold ! the recent <b className="text-amber-700">articles</b></h1>
        {
         <div className="flex flex-wrap max-w-full md:px-20">
              <Suspense  fallback={<h1 className="text-9xl font-extrabold text-yellow-500 z-50">loading</h1>} >
              {
                  posts.slice(0,4).map((post,ind)=>(
                    <PostCard className="px-4"  key={ind} post={post}/>
                  ))
                  }
              </Suspense>
        <Link href={"/articles"} className="col-span-2 w-full flex justify-center items-center font-bold text-stone-400 text-xl ">see all</Link>
        </div>
        }
        <Timeline/>


    </main>
  );
}





const LoadingPost  =({count}:{count:number})=>{
  const list  =  Array(count)
  
  return (
    list.map((no,ind)=>(
      <div key={ind} className="skeleton w-full h-[10rem]"></div>
    ))
  )
}