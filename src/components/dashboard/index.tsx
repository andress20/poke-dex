import { Fragment } from 'react'
import Image from 'next/image'
import IPlainObject from '@def/IPlainObject'

const Dashboard: React.FC<IPlainObject> = ({ pokemons }) => {
  // const myLoader = ({ src, width, quality }: IPlainObject) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }
  return (
    <Fragment>
      <div>Dashboard</div>
      {pokemons.map((image: string) => (
        <img key={image} src={image} alt="Picture of the author"></img>
        // <Image loader={myLoader} src={src} alt="Picture of the author" width={450} height={450}></Image>
      ))}
    </Fragment>
  )
}
export default Dashboard
