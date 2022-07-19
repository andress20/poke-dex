//NextJS
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
//React
import { Fragment } from 'react'
//Definitions
import { IPokemon } from '@def/IPokemon'
//Services
import { getPokemons } from '@services/services'
//Components
import Dashboard from '@comp/dashboard'

const Home: NextPage<{ pokemonImages: string[] }> = ({ pokemonImages }) => {
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
  const response = await getPokemons()
  const pokemonImages = response.map(
    (images: IPokemon) => images?.sprites?.other?.dream_world.front_default ?? '/pokeball-logo.png'
  )
  return { props: { pokemonImages } }
}

export default Home
