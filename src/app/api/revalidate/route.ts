// ./src/app/api/revalidate/route.ts
import {revalidateTag} from 'next/cache'
import {type NextRequest, NextResponse} from 'next/server'
import {parseBody} from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
    console.log("heyyyo this is from the hook . this means it is revalidating ")
  try {
    const {isValidSignature, body} = await parseBody<{_type:any}>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({message, isValidSignature, body}), {status: 401})
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response(JSON.stringify({message, body}), {status: 400})
    }

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    revalidateTag(body._type)

    return NextResponse.json({body})
  } catch (err:any) {
    console.error(err)
    return new Response(err.message, {status: 500})
  }
}