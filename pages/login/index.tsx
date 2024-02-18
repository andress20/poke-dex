import LoginForm from '@comp/molecules/form/login'
import { Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { queryKeys } from '@utils/tanstackQuery/queryKeys'
import { getPokemonsImages } from '@services/services'
export const pokemonsListDashboard = ['charmander', 'squirtle', 'bulbasaur', 'pikachu']

/**
 * Passing Message as a children or prop avoid re-render when form changes
 */

const Message = () => (
  <Typography sx={{ marginTop: 10, fontWeight: 100 }}>* Users with no activity for 3 days, will be removed </Typography>
)

const Login: NextPage = () => <LoginForm bottomMessage={<Message />} />

// Prefethind Pokemons of Dashboard and then when Dashboard component load, it will take pokemons from cache
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.dashboardPokemons, ...pokemonsListDashboard],
    queryFn: () => getPokemonsImages(pokemonsListDashboard),
  })

  return { props: { dehydratedState: dehydrate(queryClient) } }
}

export default Login
