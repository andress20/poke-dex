import { Theme } from '@mui/material'

// makeStyles and createStyles looks like need to be call from @mui/styles library because the other two libraries doesn't work properly
// import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
// import { createStyles, makeStyles, useTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    loginForm: {
      //   gridColumnStart: 'span 2',
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
})

export default useStyles
