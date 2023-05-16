import { config } from '@util/config'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${config.pokemonTypesApi}`)
  const pokemonTypes = await response.json()
  res.status(200).json(pokemonTypes)
}
