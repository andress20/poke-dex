import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pokemonApi = `https://pokeapi.co/api/v2/pokemon/`
  const initialPokemons = ['eevee', 'charizard', 'butterfree']
  try {
    const pokemonData = initialPokemons.map(pokemon => fetch(`${pokemonApi}${pokemon}`).then(res => res.json()))
    const data = await Promise.all(pokemonData)
    return res.status(200).json(data)
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: `There was an ERROR in api/AllPokemons => getPokemonByName ${error}` })
  }
}
