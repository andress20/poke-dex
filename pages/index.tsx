import type { GetStaticProps, NextPage } from 'next'
import { Fragment, useState } from 'react'
import Head from 'next/Head'

//Components
import Dashboard from '@comp/dashboard'

//utilities
import { config } from '@util/config'
import IPlainObject from '@def/IPlainObject'

const Home: NextPage<IPlainObject> = props => {
  console.log('pokemons:', props.dashboardPokemons)
  const images: string[] = props.dashboardPokemons.map((images: { sprites: any }) => images.sprites)
  console.log('images:', images)

  return (
    <Fragment>
      <Head>
        <title>Poke-dex</title>
        <meta name="description" content="Poke dex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard pokemons={images} />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${config.siteUrl}/api/AllPokemons`)
  const dashboardPokemons = await response.json()
  return { props: { dashboardPokemons } }
}

export default Home
