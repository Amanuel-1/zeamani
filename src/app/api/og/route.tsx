import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime ='edge'


export  async function GET(req:NextRequest){
    
    return new ImageResponse(
    (

        <div tw=" absolute flex flex-col w-full h-full items-center justify-center bg-stone-800">
        <div tw=" absolute top-0 left-0 rounded-r-full bg-gray-50 flex w-[50%] bg-amber-700 h-full">
            <img height="400" width={399} style={{
                height:"100%",
                width:"100%",
                zIndex:"20"
            }} src="https://user-images.githubusercontent.com/71079278/275351091-bf163aa6-a4d0-4022-9ef4-917e0e1bcfb2.png" tw="rounded-r-full" alt="Post background image" />
            <div tw="flex flex-col justify-start align-start   bg-transparent md:flex-row w-full py-12 px-4 h-full m md:items-center justify-between p-8">
                <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-200 text-left">
                    <span>cycle detection algorithm</span>
                    <span tw="text-stone-500">a test project</span>
                </h2>
                <div tw="flex mt-8 md:mt-0 bg-yellow">
                    <div tw="flex rounded-md shadow">
                        <a href="#" tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
    )

}