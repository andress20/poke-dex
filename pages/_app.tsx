import type { AppProps } from 'next/app'
import Layout from '@comp/layout'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: { mode: 'dark' },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        containedPrimary: {
          backgroundColor: 'green',
        },
        root: {
          // Some CSS
          fontSize: '5rem',
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
