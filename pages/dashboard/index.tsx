import type { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import { getPokemonsImages } from '@services/services'
import Dashboard from '@comp/organisms/dashboard'
import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query'
import { queryKeys } from '@utils/tanstackQuery/queryKeys'
const pokemonsList = ['charmander', 'squirtle', 'bulbasaur', 'pikachu']

const DashboardHome: NextPage = () => {
  const { data: pokemonsImages, isLoading: dashboardIsLoading } = useQuery({
    queryKey: [queryKeys.dashboardPokemons, ...pokemonsList],
    queryFn: () => getPokemonsImages(pokemonsList),
    staleTime: 20 * 60 * 1_000, // 20 min
  })

  if (dashboardIsLoading) return <div>Loading... </div>
  return <Fragment>{pokemonsImages && <Dashboard images={pokemonsImages} />}</Fragment>
}

// export const getStaticProps: GetStaticProps = async () => {
//   const pokemonsList = ['charmander', 'squirtle', 'bulbasaur', 'pikachu']

//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery({
//     queryKey: [queryKeys.dashboardPokemons, ...pokemonsList],
//     queryFn: () => getPokemonsImages(pokemonsList),
//   })

//   return { props: { dehydratedState: dehydrate(queryClient) } }
// }

export default DashboardHome
