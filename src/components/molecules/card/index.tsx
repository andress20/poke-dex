import Image from 'next/image'
import useStyles from './styles'
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { componentProps } from './types'
import UserContext from '@context'
import Cookies from 'js-cookie'
import { useContext, Fragment, useEffect } from 'react'
import { useToast } from '@hooks'
import Toast from '@atoms/toast'
import { userActionTypes } from '@src/context/types'

const PokemonCard: React.FC<componentProps> = ({ image, title }) => {
  const classes = useStyles()
  const user = useContext(UserContext)
  const { message, severity, openToast, handleOpenToast, handleCloseToast } = useToast()

  useEffect(() => {
    Cookies.set(`pokemonUser_${user.name}`, JSON.stringify(user), { expires: 1 })
  }, [user])

  function handlerClick() {
    if (!user.name) {
      handleOpenToast('You must be logged in', 'warning')
    } else {
      if (user.likes.includes(title)) {
        user.userDispatch({ type: userActionTypes.substractLikes, payload: { pokemonSingleName: title } })
        return
      } else {
        user.userDispatch({ type: userActionTypes.addLikes, payload: { pokemonArrayNames: [title] } })
      }
    }
  }

  return (
    <Fragment>
      <Card className={classes.card} sx={{ maxWidth: 300, margin: '10px' }}>
        {/* <Image className={classes.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="250" height="280" /> */}
        <Image className={classes.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="200" height="200" />
        <CardContent sx={{ padding: '0px' }}>
          <Typography className={classes.cardTitle} variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small">More</Button>
          <Button onClick={handlerClick}>
            {user.likes.includes(title) ? (
              <Favorite className={classes.favoriteIcon} />
            ) : (
              <FavoriteBorder color="primary" />
            )}
          </Button>
        </CardActions>
      </Card>
      {<Toast message={message} open={openToast} close={handleCloseToast} severity={severity} />}
    </Fragment>
  )
}

export default PokemonCard
