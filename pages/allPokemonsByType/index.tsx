import { Fragment, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getPokemonsByType, getAllPokemonTypes } from '@services/services'
import PokemonTypePicker from '@comp/molecules/typePicker'
import { PokemonUrl } from '@def/IPokemon'
import { getPokemonsImages } from '../../src/services/services'
import PokemonCard from '@comp/molecules/card'
import { transformToPokemonTypeNames } from '@util/transforms'
import { queryKeys } from '@util/queryKeys'

function PokemonsByType() {
  const [listTypes, setListTypes] = useState<string[]>([])
  const [images, setImages] = useState<PokemonUrl[]>()

  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKeys.pokemonsByTypes],
    queryFn: getAllPokemonTypes,
    staleTime: 5 * 60 * 1_000,
  })

  const mutation = useMutation({
    mutationFn: () => getPokemonsByType(data, listTypes),
    onSuccess(data: string[]) {
      ;(async function handlerImages() {
        if (data) {
          const images = await getPokemonsImages([...new Set(data)])
          setImages(images)
        }
      })()
    },
  })

  /**
   * We can fetch data types with query also like this. But query tryies to fetch when component mount and we don't need that
   * because first time we haven't choosen anything that cause isLoading keeps true for ever. (if we don't use isLoading all works fine)
   *
   * Mutation implementation is better due the first fetch begin when we click button 'apply filter' and we can use isLoading normally
   */

  // const {
  //   data: listNamesPokemonsChecked,
  //   isFetching,
  //   refetch: refetchListNamesChecked,
  // } = useQuery({
  //   // eslint-disable-next-line @tanstack/query/exhaustive-deps
  //   queryKey: ['PokemonsListNamesByTypes', ...listTypes], // al ponerle aca el listTypes se actualiza apenas doy click en un checkbox sin esperar al boton
  //   queryFn: () => getPokemonsByType(data, listTypes),
  //   enabled: false,
  //   staleTime: 5 * 60 * 1_000,
  // })

  // // TODO: Try to transform this handler to sumbit format in a form. Maybe is a better practice
  // useEffect(() => {
  //   ;(async function handlerImages() {
  //     if (listNamesPokemonsChecked) {
  //       const images = await getPokemonsImages([...new Set(listNamesPokemonsChecked)])
  //       setImages(images)
  //     }
  //   })()
  // }, [listNamesPokemonsChecked])

  if (isLoading) return <span>Is Loading List of types...</span>
  if (isError) return <span>Something went wrong...</span>

  return (
    <Fragment>
      {data && <h1>Types</h1>}
      {mutation.isLoading && <span> Loading images...</span>}
      {/* {isFetching && <span> Loading images...</span>} */}
      <PokemonTypePicker pokemonTypes={transformToPokemonTypeNames(data)} setListTypes={setListTypes} />
      {/* <button onClick={() => refetchListNamesChecked()}>Apply filter</button> */}
      <button onClick={() => mutation.mutate()}>Apply filter</button>
      <div>
        {images &&
          images.map((image: PokemonUrl) => <PokemonCard key={image.name} title={image.name} image={image.url} />)}
      </div>
    </Fragment>
  )
}

export default PokemonsByType
