import { PokemonUrl } from '@def/IPokemon'
import { config } from '@util/config'
import { NextApiRequest, NextApiResponse } from 'next'

interface PromisePokemon {
  count: number
  next: string
  previous: string
  results: PokemonUrl[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${config.pokemonApi}?limit=20000&offset=0`)
  const data: PromisePokemon = await response.json()
  const { results } = data
  const pokemonNames = results.map((pokemon: PokemonUrl) => pokemon.name)
  return res.status(200).json({ pokemonNames })
}
