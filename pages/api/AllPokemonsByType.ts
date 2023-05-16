import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pokemons: types } = req.body
  const urlsPokemonsChecked = types?.map((item: any) => fetch(item.url).then(res => res.json()))
  const infoPokemons = await Promise.all(urlsPokemonsChecked)
  const listNamesPokemonsChecked = infoPokemons
    .map(item => item.pokemon)
    .map(item => item.map((poke: any) => poke.pokemon.name))

  return res.status(200).json(listNamesPokemonsChecked)
}
