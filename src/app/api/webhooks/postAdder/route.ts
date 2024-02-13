// Built on Next.js API routes: https://nextjs.org/docs/api-routes/introduction

// provide your Sanity token from an environment variable
import { api } from 'fireup/trpc/server'
import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next'
import { useMutation } from '@tanstack/react-query'
import { db } from 'fireup/server/db'


const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const body = req.body

  try{
    const result = await db.article.create({
        data:{
            slug:body.slug.current
        }
    })

    return res.status(200).send('Log processed OK')
  }
  catch(e){
    return res.status(400).send('Log processed NOT OK')
  }


  
  
}

export default handler