import type { AppProps } from 'next/app'
import Layout from '@comp/layout'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const basicTheme = createTheme({
  palette: { mode: 'light' },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
