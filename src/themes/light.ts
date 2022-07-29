import { createTheme } from '@mui/material'
import { red, yellow } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: red,
    secondary: yellow,
  },
  components: {
    // Name of the component
    MuiButton: {
      // styleOverrides: {
      //   containedPrimary: {
      //     backgroundColor: 'green',
      //   },
      //   root: {
      //     fontSize: '1rem',
      //   },
      // },
    },
  },
})
