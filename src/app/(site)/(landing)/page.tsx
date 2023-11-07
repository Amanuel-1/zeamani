
import Link from "next/link";
import ogImg from "fireup/app/resources/og.png"
import { CreatePost } from "fireup/app/_components/create-post";
import { getServerAuthSession } from "fireup/server/auth";
import { api } from "fireup/trpc/server";
import { Tilt } from "react-tilt";
import styles from 'fireup/styles/card.module.css'
import { Button } from "../../_components/ui/button";
import { AlertDialogDemo } from "../../_components/shared/user/dialog";
import HoverCardDemo from "fireup/app/_components/ui/hovercard";
import { twMerge } from "tailwind-merge";
import Tiltable from "fireup/app/_components/shared/user/tiltable";
import ExperimentItem from "fireup/app/_components/shared/user/tiltable";
import HeroSection from "fireup/app/_components/landing/hero";
import { Images } from "fireup/app/resources";
import Image from "next/image";
import { Me } from "fireup/lib/constants";
import { Metadata, ResolvingMetadata } from "next";

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

  return (
    <main className="">
      <HeroSection/>
      {/* <Image src={Images.jellyfish} alt="" height={100} width={100}/> */}
      <div className="parent flex flex-wrap-reverse gap-4 p-10">
        {
        [1,2,3,4,5,6,7,8,9,10].map((e,i)=>(
           <ExperimentItem/>
        ))

        }
      </div>

      <h1 className="text-6xl font-extrabold px-10">Behold ! the new <b className="text-amber-700">posts</b></h1>
        <div className="grid grid-cols-4 p-10 gap-4 ">
        {
          posts && posts.map((post,ind)=>(
            <div className="flex flex-col gap-4 justify-center items-center  w-full h-[15rem] bg-stone-800 text-stone-400">
              {
                <div key={ind}><h1 className="text-2xl font-extrabold">{post.title}</h1>
                <ul className="flex flex-wrap gap-4">
                  {
                  post.tag && post.tag.map((singleTag,i)=>(
                    <li key={i} className="px-2 py-1 bg-stone-700 boder border-stone-600 text-sm font-semibold">{singleTag.name}</li>
                  ))
                }
                </ul>
                </div>
              }

            </div>
          ))
        }
        </div>

    </main>
  );
}
