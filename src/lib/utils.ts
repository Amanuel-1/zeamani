import { type ClassValue, clsx } from "clsx"
import { Metadata, ResolvingMetadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function shortener(text: string,size:number): string {
  let result: string; // Declare the type of 'result' as string

  if (text.length > size) {
    result = text.substring(0, size) + "...";
  } else {
    result = text;
  }

  return result;
}

// type seoOption ={
//   title:"AmanApps",
//   ogImageUrl:"httpsamanapps.vercel.app"
// }

// export const generateSEO=(option:seoOption,props:any)=>{
//   return function generateMetadata(
//     { params, searchParams }: typeof props,
//     parent: ResolvingMetadata
//   ): Promise<Metadata> {
//     // read route params
//     const id = params.id
   
//     // fetch data
//     const product = await fetch(`https://.../${id}`).then((res) => res.json())
   
//     // optionally access and extend (rather than replace) parent metadata
//     const previousImages = (await parent).openGraph?.images || []
   
//     return {
      
//     }
//   }
// }