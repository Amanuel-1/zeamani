
import Link from "next/link";

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
import { urlForImage } from "fireup/lib/image";
import Image from "next/image";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const posts  = await api.post.getAll.query()
  const session = await getServerAuthSession();

  return (
    <main className="">
      <HeroSection/>
      <div className="parent flex flex-wrap-reverse gap-4 p-10">
        {/* {
        [1,2,3,4,5,6,7,8,9,10].map((e,i)=>(
           <ExperimentItem/>
        ))

        } */}
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
