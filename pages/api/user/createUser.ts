import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   const { password } = req.body
  //   here we can add requirements for password
  return res.status(200).json({ message: 'user created successfully' })
}
