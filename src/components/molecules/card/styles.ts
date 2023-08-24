import { Theme } from '@mui/material'
// makeStyles and createStyles looks like need to be call from @mui/styles library because the other two libraries doesn't work properly
// import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
// import { createStyles, makeStyles, useTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

import { config } from '@util/config'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    card: {
      display: 'inline-block',
      borderRadius: '20px',
    },
    cardImage: {
      backgroundPosition: '55%',
      backgroundSize: '200%',
      backgroundImage: `url('/pokemon-wallpaper.jpg')`,
      /* TODO - remove important */
      padding: '10px !important',
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
    },
    cardTitle: { textAlign: 'center' },
    cardActions: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '0 10px',
      padding: '0',
    },
    favoriteIcon: {
      color: theme.palette.primary.main,
    },
  })
})

export default useStyles
