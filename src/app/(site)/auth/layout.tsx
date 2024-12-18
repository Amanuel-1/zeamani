import "fireup/styles/globals.css";
import { Toaster } from 'react-hot-toast';

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "fireup/trpc/react";
import { Analytics } from '@vercel/analytics/react';



export const metadata = {
  title: "Create T3 App",
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
      <body className={` overflow-x-hidden`}>
        <TRPCReactProvider headers={headers()}>
        <Toaster/>
        <Analytics/>
        {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
