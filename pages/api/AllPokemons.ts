import { IPokemon, PokemonUrl } from '@def/IPokemon'
import { config } from '@util/config'
import { NextApiRequest, NextApiResponse } from 'next'

interface PromisePokemon {
  count: number
  next: string
  previous: string
  results: PokemonUrl[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.body
  const limit = 12
  const offSet = limit * page
  const response = await fetch(`${config.pokemonApi}?limit=${limit}&offset=${offSet}`)
  const data: PromisePokemon = await response.json()
  const { results, next, previous } = data
  const urls = results.map((pokemon: PokemonUrl) => fetch(pokemon.url).then(res => res.json()))

  const listPokemonsUrl = await Promise.all(urls)
  const pokemons: PokemonUrl[] | undefined = listPokemonsUrl?.map((pokemon: IPokemon) => {
    return { name: pokemon.name, url: pokemon.sprites?.other?.dream_world.front_default ?? '/pokeball-logo.png' }
  })
  return res.status(200).json({ pokemons, next, previous })
}
