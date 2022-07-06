import { Fragment } from 'react'
import Image from 'next/Image'
import IPlainObject from '@def/IPlainObject'

const Dashboard: React.FC<IPlainObject> = pokemons => {
  // const src = pokemons.pokemons[0].other.dream_world.front_default
  const src = pokemons.pokemons[0].other.dream_world.front_default
  const myLoader = ({ src, width, quality }: IPlainObject) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <Fragment>
      <div>Dashboard</div>
      <Image loader={myLoader} src={src} alt="Picture of the author" width={150} height={150}></Image>
    </Fragment>
  )
}

export default Dashboard
