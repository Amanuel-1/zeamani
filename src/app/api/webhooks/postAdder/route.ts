// Built on Next.js API routes: https://nextjs.org/docs/api-routes/introduction

// provide your Sanity token from an environment variable
import { api } from 'fireup/trpc/server'
import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next'
import { useMutation } from '@tanstack/react-query'
import { db } from 'fireup/server/db'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(
  req: NextRequest,
  res: NextResponse
) {

  const body:any= req.body


  console.log(body.slug.current,"hhheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyooooooooooooooooooooooooooooooooooo")

  try{
    const result = await db.article.create({
        data:{
            slug:body?.slug.current
        }
    })

    return NextResponse.json({message:"this is the message"},{status:200})
  }
  catch(e){
    return NextResponse.json({message:"it is not working"},{status:400})
  }


  
  
}
