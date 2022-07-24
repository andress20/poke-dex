import { Fragment } from 'react'
import { IPokemonsImages } from '@def/IPokemon'
// TODO - el storybook no esta tomando los @del ts.config!!
// import Card from '@molecules/card'
import Card from '../../molecules/card'
import styles from './dashboard.module.css'

const Dashboard: React.FC<IPokemonsImages> = pokemons => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div className={styles.dashboard}>
        {pokemons.images.map((image: IPokemonsImages) => (
          <Card key={image.name} title={image.name} image={image.url} />
        ))}
      </div>
    </Fragment>
  )
}
export default Dashboard
