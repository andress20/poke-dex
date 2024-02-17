import type { NextPage } from 'next'
import { Fragment } from 'react'
import { getPokemonsImages } from '@services/services'
import Dashboard from '@comp/organisms/dashboard'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@utils/tanstackQuery/queryKeys'
import { pokemonsList } from '@pages/login'

const DashboardHome: NextPage = () => {
  const { data: pokemonsImages, isLoading: dashboardIsLoading } = useQuery({
    queryKey: [queryKeys.dashboardPokemons, ...pokemonsList],
    queryFn: () => getPokemonsImages(pokemonsList),
    staleTime: 20 * 60 * 1_000, // 20 min
  })

  if (dashboardIsLoading) return <div>Loading... </div>
  return <Fragment>{pokemonsImages && <Dashboard images={pokemonsImages} />}</Fragment>
}

export default DashboardHome
