import Image from 'next/image'
import useStyles from './styles'
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { componentProps } from './types'

const PokemonCard: React.FC<componentProps> = ({ image, title }) => {
  const classes = useStyles()
  // reeplace this with cookie use rdata
  const likess = ['charmander', 'bulbasaur']
  return (
    <Card className={classes.card} sx={{ maxWidth: 300, margin: '10px' }}>
      <Image className={classes.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="300" height="300" />
      <CardContent>
        <Typography className={classes.cardTitle} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button onClick={() => alert('like')}>
          {likess.includes(title) ? <Favorite className={classes.favoriteIcon} /> : <FavoriteBorder color="primary" />}
        </Button>
      </CardActions>
    </Card>
  )
}

export default PokemonCard
