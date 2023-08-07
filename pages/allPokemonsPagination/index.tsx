import { Fragment, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllPokemons } from '../../src/services/services'
import { PokemonUrl } from '@def/IPokemon'
import PokemonCard from '@comp/molecules/card'
import { queryKeys } from '@util/tanstackQuery/queryKeys'
import CardsContainer from '@comp/atoms/cardsContainer'
import { Box } from '@mui/material'

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

  return (
    <Box
      sx={{
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      <CardsContainer>
        {images.pokemons?.length ? (
          images.pokemons.map((image: PokemonUrl) => (
            <PokemonCard key={image.name} title={image.name} image={image.url} />
          ))
        ) : (
          <div>Data not found</div>
        )}
      </CardsContainer>
      <button onClick={() => setPage(prev => prev - 1)} disabled={!images.previous}>
        previous
      </button>
      <button onClick={() => setPage(prev => prev + 1)} disabled={!images.next}>
        next
      </button>
    </Box>
  )
}

export default AllPokemonsPagination
