import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
  palette: { mode: 'dark' },
  components: {
    // Name of the component
    MuiButton: {
      // styleOverrides: {
      //   containedPrimary: {
      //     backgroundColor: 'red',
      //   },
      //   root: {
      //     fontSize: '1.5rem',
      //   },
      // },
    },
  },
})
