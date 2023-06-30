import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '@comp/layout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import themes, { Themes } from '@theme/index'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Fetching } from '@comp/atoms/spinners'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // cacheTime: 3000, Just and example (default cacheTime 5 minutes)
            // refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <ThemeProvider theme={themes[Themes.lightTheme]}>
      <CssBaseline />
      <Head>
        <title>Poke-dexApp</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Fetching />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
