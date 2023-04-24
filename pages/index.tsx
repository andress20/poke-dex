import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { IPokemon, PokemonUrl } from '@src/types/IPokemon'
import { getPokemons } from '@services/services'
import Dashboard from '@comp/organisms/dashboard'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query'

const Home: NextPage = () => {
  const { data: response } = useQuery({ queryKey: ['dashboardPokemons'], queryFn: getPokemons })

  const pokemonsImages: PokemonUrl[] | undefined = response?.map((pokemon: IPokemon) => {
    return { name: pokemon.name, url: pokemon.sprites?.other?.dream_world.front_default ?? '/pokeball-logo.png' }
  })

  return (
    <Fragment>
      <Head>
        <title>Poke-dex</title>
        <meta name="description" content="Poke dex app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {pokemonsImages && <Dashboard images={pokemonsImages} />}
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['dashboardPokemons'], getPokemons)

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default Home
