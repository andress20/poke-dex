import { Fragment } from 'react'
import { PokemonsImages, PokemonUrl } from '@def/IPokemon'
// TODO - el storybook no esta tomando los @def ts.config!!
import PokemonCard from '../../molecules/card'
import { PokemonButton } from '../../atoms/button'
import styles from './dashboard.module.css'

const Dashboard: React.FC<PokemonsImages> = ({ images }) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <PokemonButton label="clickk" />
      <div className={styles.dashboard}>
        {images.map((image: PokemonUrl) => (
          <PokemonCard key={image.name} title={image.name} image={image.url} />
        ))}
      </div>
    </Fragment>
  )
}
export default Dashboard
