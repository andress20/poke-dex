import type { NextApiRequest, NextApiResponse } from 'next'
import Pokedex from 'pokedex-promise-v2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pokedexApi = new Pokedex()
  try {
    const pokemons = await pokedexApi.getPokemonByName(['eevee', 'charizard', 'butterfree', 'pidgey'])
    return res.status(200).json(pokemons)
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: `There was an ERROR in api/AllPokemons => getPokemonByName ${error}` })
  }
}
