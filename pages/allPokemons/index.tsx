import { Fragment, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllPokemons } from '../../src/services/services'
import { PokemonUrl } from '@def/IPokemon'
import PokemonCard from '@comp/molecules/card'

function AllPokemons() {
  const [page, setPage] = useState(0)

  const { data: images, isLoading } = useQuery({
    queryKey: ['allPokemonsList', page],
    queryFn: () => getAllPokemons(page),
    staleTime: 60 * 1_000,
    keepPreviousData: true, // instead of showing a loading spinner, this shows previous data until the new one is ready to be shown
  })

  const queryClient = useQueryClient()

  useEffect(() => {
    if (images?.next) {
      const nextPage = page + 1
      queryClient.prefetchQuery(['allPokemonsList', nextPage], () => getAllPokemons(nextPage))
    }
  }, [images?.next, page, queryClient])

  if (isLoading) return <div>Loading...</div> // with keepPreviousData option set to true, this not has effect

  return (
    <Fragment>
      {/* TODO: fix because menu bar is overlapping content  */}
      <div>List all pokemons </div>
      <div>List all pokemons </div>
      <div>List all pokemons </div>
      <div>
        {images.pokemons.length ? (
          images.pokemons.map((image: PokemonUrl) => (
            <PokemonCard key={image.name} title={image.name} image={image.url} />
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
      <button onClick={() => setPage(prev => prev - 1)} disabled={!images.previous}>
        previous
      </button>
      <button onClick={() => setPage(prev => prev + 1)} disabled={!images.next}>
        next
      </button>
    </Fragment>
  )
}

export default AllPokemons
