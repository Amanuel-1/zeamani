
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
import { getServerAuthSession } from "fireup/server/auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "AmanApps",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session  =  await getServerAuthSession()
  const user  = session?.user
  console.log("this is the user from getserversession",session)


  console.log("here si the email",user?.email,"sdfasdfAS " ,process.env.ADMIN_EMAIL)
  return (
    <html lang="en">
      <body  className={"font-extralight overflow-x-hidden"}>
        <TRPCReactProvider headers={headers()}>
        {/* <div className={`fixed -z-20  w-full h-full top-0 bg-opacity-20 invert bg-[url(https://d2vwwcvoksz7ty.cloudfront.net/grid.svg)] `}></div> */}
         
         <SessionProvide>
         <Toaster toastOptions={{position:'top-left'}}/>
         <Navbar/>
         
          {(user?.email==process.env.ADMIN_EMAIL)?(
            children
          ):(
            <div>an error ocured</div>
          )}
          <Footer/>
         </SessionProvide>
          
          
          </TRPCReactProvider>

      </body>
    </html>
  );
}
