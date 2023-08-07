import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@comp/layout/content'
import { CssBaseline, ThemeProvider } from '@mui/material'
import themes, { Themes } from '@theme/index'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Fetching } from '@comp/atoms/spinners'
import Toast from '@atoms/toast'
import { useToast, useInitialQueryClient } from '@hooks'
import { UserContext } from '@context'
import { Fragment } from 'react'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }: AppProps) {
  const { openToast, setOpenToast, handleCloseToast } = useToast()
  /**
   * queryClient uses hook because we want keep all queryCLient configuration in a separate file and
   * hook instead function because we are using useState to ensure the queryClient instance is kept alive
   * during the whole life cicle
   */
  const queryClient = useInitialQueryClient(setOpenToast)

  return (
    <Fragment>
      <Head>
        <title>Poke-dexApp</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themes[Themes.lightTheme]}>
          <Hydrate state={pageProps.dehydratedState}>
            <SnackbarProvider>
              <Fetching />
              <CssBaseline />
              <UserContext>
                <Layout>
                  <Toast message="React Query Error" open={openToast} close={handleCloseToast} severity="error" />
                  <Component {...pageProps} />
                </Layout>
              </UserContext>
            </SnackbarProvider>
          </Hydrate>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  )
}

export default MyApp
