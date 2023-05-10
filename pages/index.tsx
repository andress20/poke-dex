import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { getPokemonsImages } from '@services/services'
import Dashboard from '@comp/organisms/dashboard'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query'

const pokemonsList = ['charmander', 'squirtle', 'bulbasaur', 'pikachu']

const Home: NextPage = () => {
  const { data: pokemonsImages, isLoading } = useQuery({
    queryKey: ['dashboardPokemons'],
    queryFn: () => getPokemonsImages(pokemonsList),
    // staleTime: 60 * 60 * 24, // 1:30 minutes
    staleTime: 2000, // 1:30 minutes
    // TODO: make this with multiplications
  })

  if (isLoading) return <div>Loading... </div>
  return (
    <Fragment>
      <Head>
        <title>Poke-dexA</title>
        <meta name="description" content="Poke dex app" />
        <link rel="icon" href="/snorlax.ico" />
      </Head>
      {pokemonsImages && <Dashboard images={pokemonsImages} />}
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['dashboardPokemons'],
    queryFn: () => getPokemonsImages(pokemonsList),
    staleTime: 60 * 60 * 24,
    // TODO: make this with multiplications
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default Home
