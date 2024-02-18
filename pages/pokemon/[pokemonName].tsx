import { pokemonsListDashboard } from '@pages/login'
import { config } from '@utils/config'
import PokemonDetails from '@comp/organisms/pokemonDetails'
import { IPokemon } from '@def/IPokemon'
import { GetStaticPropsContext } from 'next'

const PokemonDetailsPage = (props: IPokemon) => {
  return <PokemonDetails {...props} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context

  const name = params?.pokemonName

  if (!pokemonsListDashboard.includes(name as string)) return { notFound: true }

  const response = await fetch(`${config.pokemonApi}${name}`)
  const pokemon: IPokemon = await response.json()

  return {
    props: { ...pokemon },
  }
}

export async function getStaticPaths() {
  const dashboardPokemons = pokemonsListDashboard.map(pokemon => ({
    params: { pokemonName: pokemon },
  }))
  return {
    paths: dashboardPokemons,
    fallback: true,
  }
}

export default PokemonDetailsPage
