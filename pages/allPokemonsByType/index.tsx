import { Fragment, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPokemonsByType, getAllPokemonTypes } from '@services/services'
import PokemonTypePicker from '@comp/molecules/typePicker'
import { PokemonUrl } from '@def/IPokemon'
import { getPokemonsImages } from '../../src/services/services'
import PokemonCard from '@comp/molecules/card'
import { transformToPokemonTypeNames } from 'pages/transforms'

function PokemonsByType() {
  const [listTypes, setListTypes] = useState<string[]>([])
  const [images, setImages] = useState<PokemonUrl[]>()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['PokemonsByTypes'],
    queryFn: getAllPokemonTypes,
    staleTime: 5 * 60 * 1000,
  })

  const {
    data: listNamesPokemonsChecked,
    isLoading: isLoadingListPokemonsChecked,
    refetch: refetchListNamesChecked,
  } = useQuery({
    queryKey: ['PokemonsListNamesByTypes', ...listTypes], // al ponerle aca el listTypes se actualiza apenas doy click en un checkbox sin esperar al boton
    queryFn: () => getPokemonsByType(data, listTypes),
    enabled: false,
  })

  // TODO: Try to transform this handler to sumbit format in a form. Maybe is a better practice
  useEffect(() => {
    ;(async function handlerImages() {
      if (listNamesPokemonsChecked) {
        const images = await getPokemonsImages(listNamesPokemonsChecked)
        setImages(images)
      }
    })()
  }, [listNamesPokemonsChecked])

  if (isLoading) return <span>Is Loading...</span>
  if (isError) return <span>Something went wrong...</span>

  return (
    <Fragment>
      <div>pokemons by type</div>
      <div>pokemons by type</div>
      <div>pokemons by type</div>
      {data && <div>andres</div>}
      <PokemonTypePicker pokemonTypes={transformToPokemonTypeNames(data)} setListTypes={setListTypes} />
      <button onClick={() => refetchListNamesChecked()}>Apply filter</button>
      {/* //TODO: el key se esta repitiendo cuando un mismo pokemon esta en varios grupos a la vez como fuego y volador */}
      <div>
        {images &&
          images.map((image: PokemonUrl) => <PokemonCard key={image.name} title={image.name} image={image.url} />)}
      </div>
    </Fragment>
  )
}

export default PokemonsByType