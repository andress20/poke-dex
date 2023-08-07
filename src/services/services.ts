import { GeneralResult } from '@def/IGeneralResult'
import { IPokemon, PokemonUrl } from '@src/types/IPokemon'
import { config } from '@util/config'
import { UserLogin } from '@def/IUser'
import bcrypt from 'bcryptjs'
import Cookies from 'js-cookie'
import { enqueueSnackbar } from 'notistack'

export const createUser = async (user: UserLogin) => {
  const userExist = Cookies.get(`pokemonUser_${user.name}`)
  if (userExist) {
    enqueueSnackbar('usuario ya existe', { variant: 'warning' })
    return null
  }

  const passwordEncrypted = bcrypt.hashSync(user?.password, bcrypt.genSaltSync())
  user.password = passwordEncrypted
  const response = await fetch(`${config.siteUrl}/api/user/createUser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
  if (response.ok) return user
}

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

export const getAllPokemonTypes = async (): Promise<GeneralResult> => {
  const response = await fetch(`${config.siteUrl}/api/PokemonTypes`)
  const pokemonTypes = await response.json()
  return pokemonTypes
}

export const getPokemonsByType = async (data: GeneralResult | undefined, listTypes: string[]): Promise<string[]> => {
  const listTypesChecked = data?.results.filter(item => listTypes.includes(item.name))
  if (listTypesChecked) {
    try {
      const response = await fetch(`${config.siteUrl}/api/AllPokemonsByType`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pokemons: listTypesChecked }),
      })
      const pokemonTypes = await response.json()
      return pokemonTypes.flat()
    } catch (error) {
      console.log(error)
    }
  }

  return []
}
