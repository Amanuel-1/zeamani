
import "fireup/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import ogImg from "fireup/app/resources/og.png"
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
import { Me } from "fireup/lib/constants";
import { ResolvingMetadata, Metadata } from "next";
import { Props } from "react-copy-to-clipboard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export async function generateMetadata(parent: ResolvingMetadata
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={"font-extralight overflow-x-hidden"}>
        <TRPCReactProvider headers={headers()}>
        {/* <div className={`fixed w-full h-full top-0 bg-opacity-20 invert bg-[url(https://d2vwwcvoksz7ty.cloudfront.net/grid.svg)] z-0`}></div> */}
         
         <SessionProvide>
         <Toaster/>
         <Navbar/>

          {children}
          <Footer/>
         </SessionProvide>
          
          
          </TRPCReactProvider>

      </body>
    </html>
  );
}
