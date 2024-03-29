import { PokemonsImages, PokemonUrl } from '@src/types/IPokemon'
// TODO: - el storybook no esta tomando los @def ts.config!!
import PokemonCard from '../../molecules/card'
import styles from './dashboard.module.css'
import { Container } from '@mui/material'

const Dashboard: React.FC<PokemonsImages> = ({ images }) => {
  return (
    <Container className={styles.dashboard}>
      {images &&
        images.map((image: PokemonUrl) => <PokemonCard key={image.name} title={image.name} image={image.url} />)}
    </Container>
  )
}
export default Dashboard
