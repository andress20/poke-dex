import { IPokemon, PokemonUrl } from '@src/types/IPokemon'
import { config } from '@util/config'

export const getAllPokemons = async (page: number) => {
  const response = await fetch(`${config.siteUrl}/api/AllPokemons`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page }),
  })
  const data = await response.json()
  return data
}

export const getAllPokemonsNames = async (): Promise<{ allPokemons: PokemonUrl[] }> => {
  const response = await fetch(`${config.siteUrl}/api/AllPokemonsNames`)
  const data = await response.json()
  return data
}

export const getPokemonsImages = async (pokemonsList: string[]): Promise<PokemonUrl[]> => {
  const response = await fetch(`${config.siteUrl}/api/AllPokemonsImages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pokemonsList }),
  })
  const pokemons = await response.json()
  return pokemons
}

export const getPokemonByName = async (name: string): Promise<IPokemon> => {
  const response = await fetch(`${config.siteUrl}/api/pokemonByName`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pokemonName: name }),
  })
  const pokemonByName = await response.json()
  return pokemonByName
}
