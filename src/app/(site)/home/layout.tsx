
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
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "zeamani",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={"font-extralight overflow-x-hidden"}>
      <Toaster/>
        <TRPCReactProvider headers={headers()}>
          
         <SessionProvide>
         <Analytics/>
          {children}
          
         </SessionProvide>
          
          
          </TRPCReactProvider>

      </body>
    </html>
  );
}
