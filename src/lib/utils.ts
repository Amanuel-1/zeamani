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

export function getDomain() {
  const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http"
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000"
  
  return `${protocol}://${domain}`
}
export function getDomainName() {
  const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http"
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000"
  
  return `${domain}`
}

export function extractTweetId(url: string): string | null {
  const regex = /\/status\/(\d+)/;
  const match = regex.exec(url);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}


// type seoOption ={
//   title:"zeamani",
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