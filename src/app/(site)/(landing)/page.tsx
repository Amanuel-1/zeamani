
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


export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="">
      <div className="parent grid grid-cols-4 gap-4 p-10">
        {
        [1,2,3,4,5,6,7,8,9,10].map((e,i)=>(
           <ExperimentItem/>
        ))
        }
      </div>
    </main>
  );
}
