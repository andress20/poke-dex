import { IPokemon, PokemonUrl } from '@def/IPokemon'
import type { NextApiRequest, NextApiResponse } from 'next'
import { config } from '@util/config'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pokemonsList } = req.body

  try {
    // create array with fetch per pokemon
    const pokemonData = pokemonsList.map((pokemon: string) =>
      fetch(`${config.pokemonApi}${pokemon}`).then(res => res.json())
    )

    const data = await Promise.all(pokemonData)
    const pokemons: PokemonUrl[] | undefined = data?.map((pokemon: IPokemon) => {
      return { name: pokemon.name, url: pokemon.sprites?.other?.dream_world.front_default ?? '/pokeball-logo.png' }
    })
    return res.status(200).json(pokemons)
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: `There was an ERROR in api/AllPokemons => getPokemonByName ${error}` })
  }
}
