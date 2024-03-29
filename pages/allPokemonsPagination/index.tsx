import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllPokemons } from '../../src/services/services'
import { queryKeys } from '@utils/tanstackQuery/queryKeys'
import PokemonPagination from '@comp/organisms/pokemonPagination'

function AllPokemonsPagination() {
  const [page, setPage] = useState(0)

  const { data: images = [], isLoading } = useQuery({
    queryKey: [queryKeys.allPokemonsList, page],
    queryFn: () => getAllPokemons(page),
    staleTime: 60 * 1_000,
    keepPreviousData: true, // instead of showing a loading spinner, this shows previous data until the new one is ready to be shown
  })

  const queryClient = useQueryClient()

  useEffect(() => {
    if (images?.next) {
      const nextPage = page + 1
      queryClient.prefetchQuery([queryKeys.allPokemonsList, nextPage], () => getAllPokemons(nextPage))
    }
  }, [images?.next, page, queryClient])

  if (isLoading) return <div>Loading...</div> // with keepPreviousData option set to true, this has no effect

  return <PokemonPagination images={images} setPage={setPage} />
}
export default AllPokemonsPagination
