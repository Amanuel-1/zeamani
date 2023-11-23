import { Me } from "fireup/lib/constants";
import { urlForImage } from "fireup/lib/image";
import { getDomain } from "fireup/lib/utils";
import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime ='edge'


export  async function GET(req:NextRequest){

    const params  = req.nextUrl.searchParams
    const author  = params.get('author')
    const title   = params.get('title')
    const image  = params.get('image')
    const avatar  = params.get('avatar')
    const website  = getDomain()
    return new ImageResponse(
    (
        <div tw=" absolute flex flex-col w-full h-full items-center justify-center bg-stone-800">
        <div tw=" absolute top-0 left-0 rounded-r-full bg-gray-50 flex w-[50%] bg-amber-700 h-full">
            <img height="400" width={399} style={{
                height:"100%",
                width:"100%",
                zIndex:20
            }} src={image??"https://user-images.githubusercontent.com/71079278/275351091-bf163aa6-a4d0-4022-9ef4-917e0e1bcfb2.png"} tw="rounded-br-full" alt="Post background image" />
            <div tw="flex flex-col w-full justify-center items-center">
                <div tw="flex flex-col min-h-screen bg-transparent relative flex-wrap justify-center items-center px-4 text-wrap">
                    <span tw="flex flex-wrap text-wrap  text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 ">{title}</span>
                    <span tw="text-stone-300 w-full text-lg sm:text-xl md:text-2xl  py-3 font-extrabold">
                    {website}</span>
                    
                    <div tw="absolute bottom-6 left-6 text-stone-500 flex gap-4">
                    <span tw=" rounded-full h-[5rem] w-[5rem]  bg-blue-400 overflow-hidden border-4 border-neutral-100">
                        <img src={avatar as string ?? "https://media.licdn.com/dms/image/D4D03AQFhYXOlndUMyA/profile-displayphoto-shrink_200_200/0/1689808459339?e=1706140800&v=beta&t=B8314U4DPcI2tcYX6MHTCqBfbQ3v681G8YP_hNx0Gvg"} tw="h-full w-full border-3 rounded-full " />
                    </span>
                     <span tw="text-stone-500 px-4  text-center self-center font-bold  text-xl text-amber-300 ">Amanuel Garomsa  [author]</span>
                     </div>
                   
                </div>
                
               

               
            </div>
        </div>
        </div>
    )
    
    )

}