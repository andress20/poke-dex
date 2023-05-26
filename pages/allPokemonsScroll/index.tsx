import { Fragment, useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllPokemons } from '../../src/services/services'
import { GeneralResult } from '@def/IGeneralResult'
import InfiniteScroll from 'react-infinite-scroll-component'
import PokemonCard from '@comp/molecules/card'

function AllPokemonsScroll() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['AllPokemons'],
    queryFn: ({ pageParam = 0 }) => getAllPokemons(pageParam),
    getNextPageParam: (lastPage: GeneralResult) => {
      if (!lastPage.next) return false
      const offset = lastPage.next ? +lastPage.next.split('=')[1].split('&')[0] : 0
      return offset / 12
    },
  })

  const pokemonsCount = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          results: [{ name: '', url: '' }],
          pokemons: [...prev.pokemons, ...page.pokemons],
        }
      }),
    [data]
  )

  return (
    <Fragment>
      <div>hola</div>
      <div>hola</div>
      <div>hola</div>
      <InfiniteScroll
        dataLength={pokemonsCount ? pokemonsCount.pokemons.length : 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={'cargando mas'}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data &&
          data.pages.map(pageData =>
            pageData.pokemons.map(pokemon => {
              return <PokemonCard key={pokemon.name} title={pokemon.name} image={pokemon.url} />
            })
          )}
      </InfiniteScroll>
    </Fragment>
  )
}

export default AllPokemonsScroll
