
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


export const metadata = {
  title: "Articles - Zeamani",
  description: "Explore a collection of articles on various topics.",
  keywords: [
    "articles",
    "blog",
    "posts",
    "topics",
    "Zeamani",
  ],
  openGraph: {
    title: "Articles - Zeamani",
    description:
      "Discover a collection of articles on various topics at Zeamani.",
    url: "https://www.zeamani.com/articles",
    images: [
      {
        url: "https://i.ibb.co/fkxCDgT/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Articles - Zeamani",
      },
    ],
    siteName: "zeamani-Amanuel Garomsa",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <div className="relative h-screen w-screen overflow-y-auto scroll-smooth bg-gradient-to-br from-gray-900 to-black text-white">
          <TRPCReactProvider headers={headers()}>
        {/* <div className={`fixed w-full h-full top-0 bg-opacity-20 invert bg-[url(https://d2vwwcvoksz7ty.cloudfront.net/grid.svg)] z-0`}></div> */}
         
         <SessionProvide>
         <Toaster/>
          <Navbar/>

          {children}

         </SessionProvide>
          
          
          </TRPCReactProvider>
        </div>

  );
}
