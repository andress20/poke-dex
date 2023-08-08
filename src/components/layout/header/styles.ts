import { Theme } from '@mui/material'
// makeStyles and createStyles looks like need to be call from @mui/styles library because the other two libraries doesn't work properly
// import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
// import { createStyles, makeStyles, useTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    toolBar: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiButtonBase-root.MuiIconButton-root': {
        position: 'fixed',
        right: '200px',
      },
    },
    menuItems: {
      display: 'flex',
    },
    toolTip: {
      '& .MuiAvatar-root.MuiAvatar-circular': {
        position: 'fixed',
        right: '200px',
      },
    },
  })
})

export default useStyles
