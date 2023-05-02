import Image from 'next/image'
import styles from './card.module.css'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { componentProps } from './types'

const PokemonCard: React.FC<componentProps> = ({ image, title }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '10px' }} className={styles.card}>
      <Image className={styles.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="300" height="300" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default PokemonCard
