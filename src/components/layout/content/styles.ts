import { Theme } from '@mui/material'
// makeStyles and createStyles looks like need to be call from @mui/styles library because the other two libraries doesn't work properly
// import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
// import { createStyles, makeStyles, useTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    layout: {
      display: 'flex',
      height: '100vh',
      '& .MuiContainer-maxWidthLg': {
        maxWidth: 1380,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
    },
  })
})
export default useStyles
