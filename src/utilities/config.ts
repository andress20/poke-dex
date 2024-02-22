import { IConfig } from '@src/types/IConfig'

export const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SM_URL,
  pokemonApi: process.env.POKEMON_API_URL,
  pokemonTypesApi: process.env.POKEMON_TYPES_API_URL,
  apiLimitUrlParameter: process.env.API_LIMIT_URL_PARAMETER ? parseInt(process.env.API_LIMIT_URL_PARAMETER) : 12,
}
