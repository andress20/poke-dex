import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { getPokemonsImages } from '@services/services'
import Dashboard from '@comp/organisms/dashboard'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query'

const pokemonsList = ['charmander', 'squirtle', 'bulbasaur', 'pikachu']

const Home: NextPage = () => {
  const { data: pokemonsImages, isLoading: homeIsLoading } = useQuery({
    queryKey: ['dashboardPokemons'],
    queryFn: () => getPokemonsImages(pokemonsList),
    staleTime: 20 * 60 * 1000, // 20 min
  })

  if (homeIsLoading) return <div>Loading... </div>
  return <Fragment>{pokemonsImages && <Dashboard images={pokemonsImages} />}</Fragment>
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['dashboardPokemons'],
    queryFn: () => getPokemonsImages(pokemonsList),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default Home
