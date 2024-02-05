import CardsContainer from '@comp/atoms/cardsContainer'
import PokemonCard from '@comp/molecules/card'
import { GeneralResult } from '@def/IGeneralResult'
import { PokemonUrl } from '@def/IPokemon'
import { Box } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface PokemonPagination {
  images: GeneralResult
  setPage: Dispatch<SetStateAction<number>>
}

function PokemonPagination({ images, setPage }: PokemonPagination) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        height: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
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
      <button onClick={() => setPage((prev: number) => prev - 1)} disabled={!images.previous}>
        previous
      </button>
      <button onClick={() => setPage((prev: number) => prev + 1)} disabled={!images.next}>
        next
      </button>
    </Box>
  )
}

export default PokemonPagination
