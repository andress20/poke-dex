import { Theme } from '@mui/material'
// makeStyles and createStyles looks like need to be call from @mui/styles library because the other two libraries doesn't work properly
// import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
// import { createStyles, makeStyles, useTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    cardsContainer: {
      display: 'flex',
      maxWidth: '100%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
})

export default useStyles
