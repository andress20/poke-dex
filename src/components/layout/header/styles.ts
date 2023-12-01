import { Theme } from '@mui/material'
// makeStyles and createStyles looks like need to be call from @mui/styles library because the other two libraries doesn't work properly
// import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
// import { createStyles, makeStyles } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    navBar: {
      backgroundColor: theme.palette.primary.main,
      height: 'inherit',
    },
    menuBar: {
      display: 'flex',
      height: '-webkit-fill-available',
      justifyContent: 'center',
      alignContent: 'right',
      margin: '0',
      '& .MuiMenuItem-gutters': {
        padding: '0px 16px',
        color: theme.font.primary,
      },
    },
  })
})

export default useStyles
