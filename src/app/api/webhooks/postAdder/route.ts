import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = "psupabasePostCreateBook"

export default async function POST(req:NextApiRequest, res:NextApiResponse) {
  const signature = req.headers[SIGNATURE_HEADER_NAME]
  const body = await readBody(req) // Read the body into a string
  if (!(await isValidSignature(body, signature as any, secret))) {
    res.status(401).json({success: false, message: 'Invalid signature'})
    return
  }

  const jsonBody = JSON.parse(body)
  console.log("so this is the data",jsonBody)



  res.json({success: true})
}
