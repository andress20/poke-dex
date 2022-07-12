import { IPokemon, Pokemons } from '@def/IPokemon'
import { config } from '@util/config'

export const getPokemons = async (): Promise<IPokemon[]> => {
  const response = await fetch(`${config.siteUrl}/api/AllPokemons`)
  const pokemons = new Pokemons(await response.json())
  return pokemons.pokemonList
}
