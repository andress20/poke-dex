import type { AppProps } from 'next/app'
import Layout from '@comp/layout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import themes, { Themes } from '@theme/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes[Themes.lightTheme]}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
