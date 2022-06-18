import type { NextApiRequest, NextApiResponse } from 'next'
import Pokedex from 'pokedex-promise-v2'

const getSomething = async (req: NextApiRequest, res: NextApiResponse) => {
  const P = new Pokedex()
  const data = await P.getPokemonByName(['eevee', 'ditto']) // with Promise
    .then(response => response)
    .catch(error => {
      console.log('There was an ERROR: ', error)
    })

  res.status(200).json(data)
}

export default getSomething
