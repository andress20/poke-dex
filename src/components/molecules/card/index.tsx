import Image from 'next/image'
import styles from './card.module.css'
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { componentProps } from './types'
import UserContext from '@context'
import Cookies from 'js-cookie'
import { useContext, useEffect } from 'react'
import { useToast } from '@hooks'
import Toast from '@atoms/toast'
import { userActionTypes } from '@src/context/types'
import Link from 'next/link'

const PokemonCard: React.FC<componentProps> = ({ image, title }) => {
  const user = useContext(UserContext)
  const { message, severity, openToast, handleOpenToast, handleCloseToast } = useToast()

  useEffect(() => {
    Cookies.set(`pokemonUser_${user.name}`, JSON.stringify(user), { expires: 3 })
  }, [user])

  function handlerClick() {
    if (!user.name) {
      return handleOpenToast('You must be logged in', 'warning')
    } else {
      if (user.likes.includes(title)) {
        user.userDispatch({ type: userActionTypes.substractLikes, payload: { pokemonSingleName: title } })
      } else {
        user.userDispatch({ type: userActionTypes.addLikes, payload: { pokemonArrayNames: [title] } })
      }
    }
  }

  return (
    <Card className={styles.card} sx={{ maxWidth: 300, margin: '10px' }}>
      <Link href={`pokemon/${title}`}>
        <Image className={styles.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="200" height="200" />
      </Link>
      <CardContent sx={{ padding: '0px' }}>
        <Typography className={styles.cardTitle} variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button size="small">More</Button>
        <Button onClick={handlerClick}>
          {user.likes.includes(title) ? (
            <Favorite className={styles.favoriteIcon} />
          ) : (
            <FavoriteBorder color="primary" />
          )}
        </Button>
      </CardActions>
      {<Toast message={message} open={openToast} close={handleCloseToast} severity={severity} />}
    </Card>
  )
}

export default PokemonCard
