import { createTheme } from '@mui/material'
import { red, grey } from '@mui/material/colors'

// Expand theme variables
declare module '@mui/material/styles' {
  interface Theme {
    font: {
      primary: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    font?: {
      primary?: string
    }
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: red[900] },
    secondary: { main: grey[500], light: grey[200], dark: grey[800] },
  },
  font: {
    primary: grey[400],
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
