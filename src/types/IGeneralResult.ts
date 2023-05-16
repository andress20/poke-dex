import { PokemonUrl } from './IPokemon'

export interface GeneralResult {
  count: number
  next: string
  previous: string
  results: PokemonUrl[]
}
