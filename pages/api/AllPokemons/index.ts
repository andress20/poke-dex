import type { NextApiRequest, NextApiResponse } from 'next'
import Pokedex from 'pokedex-promise-v2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pokedexApi = new Pokedex()
  try {
    const data = await pokedexApi.getPokemonByName(['eevee', 'ditto'])
    return res.status(200).json(data)
  } catch (error) {
    console.log('There was an ERROR in getPokemonByName: ', error)
  }
}
