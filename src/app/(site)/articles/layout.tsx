
import "fireup/styles/globals.css";
import { Toaster } from 'react-hot-toast';

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "fireup/trpc/react";
import Footer from "fireup/app/_components/shared/footer/Footer";
import Navbar from "fireup/app/_components/shared/navbar/Navbar";
import { opensans, pacifico, roboto } from "fireup/styles/Fonts";
import { SessionProvider } from "next-auth/react";
import SessionProvide from "fireup/app/_components/auth/sessionProvide";
import Image from "next/image";
import { Images } from "fireup/app/resources";
import { Metadata, ResolvingMetadata } from "next/types";
import { client } from "fireup/lib/client";
import { urlForImage } from "fireup/lib/image";
import { SPost } from "fireup/lib/types";
import { getDomain } from "fireup/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

type postProps  = {

}
export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

 
  // fetch data
  const title =  "Zeamani Articles";
 

  const website  = getDomain()
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images ?? []
 
  return {
    title: title,
    description:"Explore insightful articles on www.zeamani.com covering a wide range of topics. From [briefly mention key topics/niches you cover] to [highlight another key aspect], our articles provide valuable information and perspectives. Join us for engaging reads that inform and inspire.",
    authors:[{name:"Amanuel Garomsa",url:`https://www.linkedin.com/in/amanuel-garomsa-36ba79213/`}],
    creator:"Amauel Garomsa",
    keywords:["blog","nature","technology","crypto","data mining","art","love","football","lifestyle"],
    openGraph:{
      images: [Images.articlesOg],
    },
    twitter: {
      card: "summary_large_image",
      title: "Generate Dynamic Open Graph and Twitter Images in Next.js",
      description:"Explore insightful articles on www.zeamani.com covering a wide range of topics. From [briefly mention key topics/niches you cover] to [highlight another key aspect], our articles provide valuable information and perspectives. Join us for engaging reads that inform and inspire.",
      images: [Images.articlesOg],
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <div className="">
          <TRPCReactProvider headers={headers()}>
        {/* <div className={`fixed w-full h-full top-0 bg-opacity-20 invert bg-[url(https://d2vwwcvoksz7ty.cloudfront.net/grid.svg)] z-0`}></div> */}
         
         <SessionProvide>
         <Toaster/>


          {children}

         </SessionProvide>
          
          
          </TRPCReactProvider>
        </div>

  );
}
