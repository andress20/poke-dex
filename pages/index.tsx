//NextJS
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
//React
import { Fragment } from 'react'
//Definitions
import { IPokemon, IPokemonsImages } from '@def/IPokemon'
//Services
import { getPokemons } from '@services/services'
//Components
import Dashboard from '@comp/organisms/dashboard'

const Home: NextPage<IPokemonsImages> = images => {
  return (
    <Fragment>
      <Head>
        <title>Poke-dex</title>
        <meta name="description" content="Poke dex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard {...images} />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getPokemons()
  const images: IPokemonsImages[] = response.map((pokemon: IPokemon) => {
    return { name: pokemon.name, url: pokemon?.sprites?.other?.dream_world.front_default ?? '/pokeball-logo.png' }
  })
  return { props: { images } }
}

export default Home
