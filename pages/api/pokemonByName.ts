import { config } from '@util/config'

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pokemonName } = req.body
  const response = await fetch(`${config.pokemonApi}${pokemonName}`)
  const pokemonByName = await response.json()
  res.status(200).json({ pokemonByName })
}
