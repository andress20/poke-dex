import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userPass, savedUserPass } = req.body
  const verification = bcrypt.compareSync(userPass, savedUserPass)
  if (verification) return res.status(200).json({ message: 'logged successfuly' })
  return res.status(401).json({ message: 'password incorrect' })
}
