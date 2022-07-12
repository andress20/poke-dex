//NextJS
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/Head'
//React
import { Fragment } from 'react'
//Definitions
import IPlainObject from '@def/IPlainObject'
import { Sprites, IPokemon } from '@def/IPokemon'
//Services
import { getPokemons } from '@services/services'
//Components
import Dashboard from '@comp/dashboard'

const Home: NextPage<IPlainObject> = ({ pokemonImages }) => {
  return (
    <Fragment>
      <Head>
        <title>Poke-dex</title>
        <meta name="description" content="Poke dex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard pokemons={pokemonImages} />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response: IPokemon[] = await getPokemons()
  const pokemonImages: Sprites[] = response.map((images: IPokemon) => images.sprites)
  // response tiene la REFERENCIA a un objeto de tipo Pokemon, si paso esta referencia a los props no funciona,
  // porque no puede serializar una referencia
  // const pokemons = JSON.parse(JSON.stringify(response)) // Aqui pierde el tipo IPokemon[] y toca volverlo a instanciar dentro del componente
  // Ahora le estoy pasando el CONTENIDO del objeto en vez de la REFERENCIA, asi si puede serializarlo y pasar bien los props
  return { props: { pokemonImages } }
}

export default Home
