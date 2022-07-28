// import { Fragment } from 'react'
import Image from 'next/image'
import styles from './card.module.css'

// const Card: React.FC<componentProps> = ({ image, title }) => {
//   return (
//     <Fragment>
//       <div className={styles.card}>
//         <Image className={styles.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="200" height="200" />
//         <h3 className={styles.cardTitle}>{title.toLocaleUpperCase()}</h3>
//       </div>
//     </Fragment>
//   )
// }

// export default Card

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface componentProps {
  image: string
  title: string
}

const PokemonCard: React.FC<componentProps> = ({ image, title }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '10px' }}>
      <Image className={styles.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="300" height="300" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default PokemonCard
