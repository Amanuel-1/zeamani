// src/app/api/webhooks/postAdder/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString();

    if (!isValidSignature(
      JSON.stringify(req.body),
      signature as any,
      "psupabasePostCreateBook"
    )) {
      return res.status(401).json({ msg: 'Invalid request' });
    }

    await res.revalidate(`/`);
    res.status(200).json({ msg: 'Revalidation successful' });
  } catch (error) {
    res.status(500).json({ error, msg: 'Something went wrong' });
  }
};
