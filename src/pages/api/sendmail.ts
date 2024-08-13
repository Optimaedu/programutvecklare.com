// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMail } from '@/lib/mailserver'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    sendMail(req.body.message, req.body.name, req.body.email)
    res.status(200).json({ name: "Thank you for your message" })
}