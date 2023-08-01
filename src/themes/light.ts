import { createTheme } from '@mui/material'
import { red, yellow } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: red[900] },
    secondary: { main: yellow[500] },
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
