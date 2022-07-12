import { Fragment } from 'react'
import Image from 'next/Image'
import IPlainObject from '@def/IPlainObject'
import { Sprites } from '@def/IPokemon'

const Dashboard: React.FC<IPlainObject> = ({ pokemons }) => {
  const src1: string[] = pokemons.map((sprite: Sprites) => sprite?.other?.dream_world?.front_default)
  // const myLoader = ({ src, width, quality }: IPlainObject) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }
  return (
    <Fragment>
      <div>Dashboard</div>
      {src1.map((image: string) => (
        <img key={image} src={image} alt="Picture of the author"></img>
        // <Image loader={myLoader} src={src} alt="Picture of the author" width={450} height={450}></Image>
      ))}
    </Fragment>
  )
}
{
  /* <img src={pokemons.other.dream_world.front_default} alt="Picture of the author"></img> */
}

export default Dashboard
