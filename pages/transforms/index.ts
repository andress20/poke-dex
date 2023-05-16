import { GeneralResult } from '@def/IGeneralResult'
import { PokemonUrl } from '@def/IPokemon'

export function transformToPokemonTypeNames(pokemons: GeneralResult | undefined) {
  const listNameTypes = pokemons?.results?.map((pokemon: PokemonUrl) => pokemon.name)
  return listNameTypes
}
