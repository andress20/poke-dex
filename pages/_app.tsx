import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '@comp/layout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import themes, { Themes } from '@theme/index'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider theme={themes[Themes.lightTheme]}>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
