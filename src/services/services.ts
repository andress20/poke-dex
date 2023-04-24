import { IPokemon } from '@src/types/IPokemon'
import { config } from '@util/config'

export const getPokemons = async (): Promise<IPokemon[]> => {
  const response = await fetch(`${config.siteUrl}/api/AllPokemons`)
  const pokemons = await response.json()
  return pokemons
}
