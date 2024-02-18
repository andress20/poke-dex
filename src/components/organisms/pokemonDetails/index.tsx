import { IPokemon } from '@def/IPokemon'
import { Container } from '@mui/material'
import Image from 'next/image'
import styles from './pokemonDetails.module.css'

const PokemonDetails = (props: IPokemon) => {
  return (
    <Container>
      <h1>Name: {props.name}</h1>
      <Image
        className={styles.cardImage}
        src={props.sprites?.other?.dream_world.front_default || ''}
        alt="Pokemon Image"
        layout="fixed"
        width="200"
        height="200"
      />
      <div>
        <h2>Abilities</h2>
        {props.abilities.map(data => (
          <div key={data.ability.name}>{data.ability.name}</div>
        ))}
      </div>
    </Container>
  )
}

export default PokemonDetails
