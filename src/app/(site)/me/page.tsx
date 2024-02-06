'use client'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import HeroSection from "fireup/app/_components/landing/hero";
import AboutMe from "fireup/app/_components/me/aboutMe";
import Gallery from "fireup/app/_components/me/gallery";
import { Images } from "fireup/app/resources";
import Image from 'next/image'
   
  const Me=()=>{
    const data = [
      {
        label: "Me",
        value: "html",
        page: <AboutMe/>,
      },
      {
        label: "Experiences",
        value: "experiences",
        page: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Interests",
        value: "interests",
        page: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "Gallery",
        value: "gallery",
        page: <Gallery/>,
      },
      {
        label: "Tools",
        value: "tools",
        page: <HeroSection/>,
      },
    ];
   
    return (
      <section className="w-full min-h-screen text-stone-950 dark:text-green-400 font-extralight ">
        <div className="relative w-full px-[10%] mb-[5rem] cover h-[10rem] border-b-4 border-zinc-900 bg-gradient-to-t from-[#120d0bb7] to-transparent">
                <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 h-[6rem] w-[6rem] border-8 border-stone-900 rounded-[10px] bg-stone-950">
                    <div className="relative w-full h-full">
                      <Image src={Images.gradHat} layout="fill" objectFit="cover" alt={"avatar"}/>
                    </div>
                </div>
        </div>
            <div className="flex justify-center">
                <Tabs value="html" className="w-[90%] md:w-[70%]">
                <TabsHeader
                className="bg-transparent z-0"
                indicatorProps={{
                className: "bg-[#4f342d10] border-b-2 border-amber-700 shadow-none !text-gray-900",
                }}
                >
                {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                    {label}
                </Tab>
                ))}
                </TabsHeader>
                <TabsBody>
                {data.map(({ value, page }) => (
                <TabPanel key={value} value={value}>
                    {page}
                </TabPanel>
                ))}
                </TabsBody>
                </Tabs>
            </div>
      </section>
    );
  }


  export default Me