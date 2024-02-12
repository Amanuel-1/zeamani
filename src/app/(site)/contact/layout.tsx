
import "fireup/styles/globals.css";
import { Toaster } from 'react-hot-toast';

import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Loglib from '@loglib/tracker/react'

import { TRPCReactProvider } from "fireup/trpc/react";
import Footer from "fireup/app/_components/shared/footer/Footer";
import Navbar from "fireup/app/_components/shared/navbar/Navbar";
import { opensans, pacifico, roboto } from "fireup/styles/Fonts";
import { SessionProvider } from "next-auth/react";
import SessionProvide from "fireup/app/_components/auth/sessionProvide";
import Image from "next/image";
import { Images } from "fireup/app/resources";
import { Analytics } from '@vercel/analytics/react';
import { getDomain } from "fireup/lib/utils";
import { Metadata } from "next/types";
import { keywordList } from "fireup/lib/constants";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(
  ): Promise<Metadata> {
    // read route params
  
   
    // fetch data
    const title =  "Zeamani Contacts";
   
  
    const website  = getDomain()
    // optionally access and extend (rather than replace) parent metadata
  
   
    return {
      title: title,
      description:"Reach out to Zeamani.com – your direct link to connect with me. Explore various ways to get in touch and share your thoughts. Looking forward to hearing from you! #Zeamani #ContactMe #Connect",
      authors:[{name:"Amanuel Garomsa",url:`https://www.linkedin.com/in/amanuel-garomsa-36ba79213/`}],
      creator:"Amauel Garomsa",
      keywords:keywordList,
      openGraph:{
        images: ["https://images4.imagebam.com/3f/9d/09/MERRWNC_o.png"],
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description:"Explore insightful articles on www.zeamani.com covering a wide range of topics. From [briefly mention key topics/niches you cover] to [highlight another key aspect], our articles provide valuable information and perspectives. Join us for engaging reads that inform and inspire.",
        images: ["https://images4.imagebam.com/3f/9d/09/MERRWNC_o.png"],
      }
    }
  }
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <TRPCReactProvider headers={headers()}>
        {/* <div className={`fixed w-full h-full top-0 bg-opacity-20 invert bg-[url(https://d2vwwcvoksz7ty.cloudfront.net/grid.svg)] z-0`}></div> */}
         
         <SessionProvide>
         <Toaster/>

         <Loglib
            config={{
                id: "zeamani_vercel",
            }}/>
         <Analytics/>

          <div className="m-0 p-0">
          {children}
          </div>

         </SessionProvide>
          
          
          </TRPCReactProvider>
        

  );
}
