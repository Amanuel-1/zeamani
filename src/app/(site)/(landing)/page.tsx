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
      images: ['https://images4.imagebam.com/b2/83/ae/MEPYX81_o.png', ...previousImages],
    },
    
    twitter: {
      card: ogImg as any,
      title: 'zeamani',
      description: Me.bio,
      site:"https://zeamani.vercel.app",
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
    <main className="">
      <HeroSection/>
      
      <LogoScroll/>
      <div className="bg-gradient-to-b from-transparent via-stone-700 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-transparent">

            <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10  border-neutral-900 bg-gradient-to-b from-transparent via-stone-400 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-black dark:to-transparent">

                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-900 dark:text-gray-100 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                        My Services
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-stone-600 to-black dark:bg-gradient-to-b dark:from-white dark:to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Below are some of the services I provide
                    </h2>
                    <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                        Our templates allow for maximum customization. No technical skills required – our intuitive design tools let you get the job done easily.
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                   
                    <div className="rounded-md border border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: "linear-gradient(rgb(20, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                {/* ... (SVG path data) */}
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Website Developement</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                        Tailor your landing page&apos;s look and feel, from the color scheme to the font size, to the design of your page. I ensure a seamless and visually appealing website that meets your unique needs.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: "linear-gradient(rgb(20, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                {/* ... (SVG path data) */}
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Mentourship</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Receive personalized mentorship to guide you through the intricacies of your industry. I provide valuable insights, advice, and support to help you navigate challenges and achieve your goals.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: "linear-gradient(rgb(20, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                {/* ... (SVG path data) */}
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">SEO Optimization</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Enhance your online visibility and reach your target audience with my SEO optimization services. I&apos;ll fine-tune your website to improve its search engine rankings, driving organic traffic and increasing your online presence.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: "linear-gradient(rgb(20, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                {/* ... (SVG path data) */}
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Branding</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Build a strong and memorable brand identity with my comprehensive branding services. I&apos;ll work with you to define your brand, create compelling visuals, and establish a cohesive brand presence across various channels.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: "linear-gradient(rgb(20, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                {/* ... (SVG path data) */}
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">UX/UI</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Elevate the user experience (UX) and user interface (UI) of your digital products. I focus on creating intuitive interfaces and seamless interactions, ensuring a delightful experience for your users.
                        </p>
                    </div>

                    <div className="rounded-md border border-neutral-800 dark:bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: "linear-gradient(rgb(20, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor: "rgb(93, 79, 240)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                {/* ... (SVG path data) */}
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-900 dark:text-gray-100">Auditing and Maintainance</h3>
                        <p className="my-4 text-sm mb-0 font-normal leading-relaxed tracking-wide text-gray-900 dark:text-gray-100">
                            Ensure the long-term success of your digital assets with my auditing and maintenance services. I conduct thorough audits to identify areas for improvement and provide ongoing maintenance to keep your website or application running smoothly. My goal is to optimize performance and address potential issues proactively.
                        </p>
                    </div>




                    {/* Repeat similar conversion for other sections */}
                </div>

                <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full  ">
                </div>
                <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full">
                </div>

            </section>
        </div>
      {/* ###########################################/ */}

      {/* <Image src={Images.jellyfish} alt="" height={100} width={100}/> */}
      <h1 className="text-4xl font-extrabold px-20">Behold ! the recent <b className="text-amber-700">projects</b></h1>
      <div className="parent grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:px-24  gap-4 p-10 h-full">
        {
          
        result.length && result.map((project:SProject,i:number )=>{
          return (
            <ProjectDialog key={i} project={project}/>
            // <Link key={i} className="justify-stretch" href={`/${project.slug.current}`}>
              // <Dialog key={project._id} project={project}>
              //   <Card cover={""} key={i}>               
              //   <div className="image relative w-full p-2 h-[1rem] lg:h-[2rem] xl:h-[8rem] overflow-hidden transition-all duration-700 ">
              //     <Image className="hover:scale-105 " src={urlForImage(project.mainImage).url()} alt={"Image Alt"} objectFit="cover" layout="fill" />
              //     <div className="absolute inset-0 backdrop-brightness-50 backdrop-contrast-125 group-hover:brightness-100"></div>
              //     {/* <Image src={urlForImage(project.mainImage).url()} alt="" objectFit='cover' layout='fil' /> */}
              //   </div>

              //   {/* <Link href={`/${project.slug.current}`}><div className="title w-full text-center text-2xl font-bold">{project.title}</div></Link> */}
              //   <div className="author text-xs font-light">{project.author.name}</div>
              //   <div className="description text-sm font-light py-2 ">{shortener(project.description, 50)}</div>
              //   <div className="categories w-full p-3 flex flex-wrap gap-4 text-xs">
              //     {project.categories && project.categories.map((category: Category) => (
              //       <div key={category._id} className="tags px-4 py-2 bg-stone-900 text-stone-50 hover:hue-rotate-15 ">
              //         {category.title}
              //       </div>
              //     ))}
              //   </div>
                
              // </Card>
              // </ProjectDialog>
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
        <Timeline/>
        <div className="flex flex-col gap-3 w-full px-2 md:px-20 lg-px-24">
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
        </div>


    </main>
  );
}
