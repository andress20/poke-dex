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
    staleTime: 2000,
    keepPreviousData: true,
  })

  const queryClient = useQueryClient()

  useEffect(() => {
    if (images?.next) {
      const nextPage = page + 1
      queryClient.prefetchQuery(['allPokemonsList', nextPage], () => getAllPokemons(nextPage))
    }
  }, [images?.next, page, queryClient])

  if (isLoading) return <div>Loading...</div>

  return (
    <Fragment>
      {/* TODO: fix because menu bar is overlapping content  */}
      <div>List all pokemons </div>
      <div>List all pokemons </div>
      <div>List all pokemons </div>
      <div>
        {images &&
          images.pokemons.map((image: PokemonUrl) => (
            <PokemonCard key={image.name} title={image.name} image={image.url} />
          ))}
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
