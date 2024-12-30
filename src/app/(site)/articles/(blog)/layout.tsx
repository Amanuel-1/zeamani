import "fireup/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Loglib from "@loglib/tracker/react";

import { TRPCReactProvider } from "fireup/trpc/react";
import Footer from "fireup/app/_components/shared/footer/Footer";
import Navbar from "fireup/app/_components/shared/navbar/Navbar";
import { opensans, pacifico, roboto } from "fireup/styles/Fonts";
import { SessionProvider } from "next-auth/react";
import SessionProvide from "fireup/app/_components/auth/sessionProvide";
import Image from "next/image";
import { Images } from "fireup/app/resources";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans">
      <Toaster />

      <Loglib
        config={{
          id: "zeamani",
        }}
      />
      <Analytics />

      <main className="relative h-screen w-screen overflow-y-auto scroll-smooth bg-gradient-to-br from-gray-900 to-black text-white">
        {children}
      </main>
    </div>
  );
}
