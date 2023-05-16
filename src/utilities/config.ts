import { IConfig } from '@src/types/IConfig'

export const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SM_URL,
  defaultImage: process.env.DEFAULT_IMAGE,
  pokemonApi: process.env.POKEMON_API_URL,
  pokemonTypesApi: process.env.POKEMON_TYPES_API_URL,
}
