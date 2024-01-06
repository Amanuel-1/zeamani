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
import { Category, SPost, SProject } from "fireup/lib/types";
import { urlForImage } from "fireup/lib/image";
import { shortener } from "fireup/lib/utils";
import Card from "fireup/app/_components/shared/cards/card";
import Text from "fireup/app/_components/shared/cards/Text";
import projectdialog from "fireup/app/_components/landing/projectdialog";
import ProjectDialog from "fireup/app/_components/landing/projectdialog";
import PostCard from "fireup/app/_components/shared/cards/PostCard";

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
    <main className="flex flex-col justify-center items-center">
      <HeroSection/>

      {/* <Image src={Images.jellyfish} alt="" height={100} width={100}/> */}
      <h1 className="text-4xl font-extrabold px-20">Behold ! the recent <b className="text-amber-700">projects</b></h1>
      <div className="parent grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:px-24  gap-4 p-10 h-full">
        {
          
        result.length && result.map((project:SProject,i:number )=>{
          return (
            // <Link key={i} className="justify-stretch" href={`/${project.slug.current}`}>
              <Card cover={""} key={i}>               
                <ProjectDialog project={project}>
                <div className="image relative w-full p-2 h-[1rem] lg:h-[2rem] xl:h-[8rem] overflow-hidden transition-all duration-700 ">
                  <Image className="hover:scale-105 " src={urlForImage(project.mainImage).url()} alt={"Image Alt"} objectFit="cover" layout="fill" />
                  <div className="absolute inset-0 backdrop-brightness-50 backdrop-contrast-125 group-hover:brightness-100"></div>
                  {/* <Image src={urlForImage(project.mainImage).url()} alt="" objectFit='cover' layout='fil' /> */}
                </div>

                {/* <Link href={`/${project.slug.current}`}><div className="title w-full text-center text-2xl font-bold">{project.title}</div></Link> */}
                <div className="author text-xs font-light">{project.author.name}</div>
                <div className="description text-sm font-light py-2 ">{shortener(project.description, 50)}</div>
                <div className="categories w-full p-3 flex flex-wrap gap-4 text-xs">
                  {project.categories && project.categories.map((category: Category) => (
                    <div key={category._id} className="tags px-4 py-2 bg-stone-900 text-stone-50 hover:hue-rotate-15 ">
                      {category.title}
                    </div>
                  ))}
                </div>

                </ProjectDialog>
                
              </Card>
            // </Link>

          );
        })

        }
      </div>
   

      <h1 className="text-4xl font-extrabold px-20">Behold ! the recent <b className="text-amber-700">articles</b></h1>
        {
         <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-24 py-6 gap-4 ">
        {
          posts && posts.slice(0,4).map((post,ind)=>(
            <PostCard  key={ind} post={post}/>
          ))
        }
        <Link href={"/articles"} className="col-span-2 w-full flex justify-center items-center font-bold text-stone-400 text-xl ">see all</Link>
        </div> 
        }

        {/* <div className="flex flex-col gap-3 w-full px-2 md:px-20 lg-px-24">
          {
            result.length && (result.slice(0,5).map((project,i)=>(
              <div key={i} className="relative flex flex-row-reverse w-full rounded-[5px] bg-stone-800 p-3 ">

                <h1 className="text-sm md:text-xl font-semibold text-left self-start">{project.title}</h1> 
                <small className="absolute top-0 left-2 text-xs font-light p-1 ">{moment(project._createdAt).fromNow()}</small>
                <p className="description">{shortener(project.description,100)}</p>
                  <Text/>
              </div>
              
            )
                         
            
            ))
            }
        </div> */}


    </main>
  );
}
