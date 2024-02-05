import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@comp/layout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import themes, { Themes } from '@themes/index'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Fetching } from '@comp/atoms/spinners'
import Toast from '@atoms/toast'
import { useToast, useInitialQueryClient } from '@hooks'
import { UserContext } from '@context'
import { SnackbarProvider } from 'notistack'
/**
 * ClientOnly was necessary to solve MUI and NextJS issues with styles because SSR has conflicts
 * when server render some styles adds specific className and then clientSide renders the same
 * style but with different className and that generates inconsistencies
 * https://github.com/mui/material-ui/issues/15073
 */
import ClientOnly from './ClientOnly'
/**
 * Add UserMenu (circle with the initial letter of the user)
 * using Portal just for academic purposes
 */
import UserMenu from '@comp/layout/userMenu'
import { useRef } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const { openToast, setOpenToast, handleCloseToast } = useToast()
  /**
   * queryClient uses hook because we want keep all queryCLient configuration in a separate file and
   * hook instead function because we are using useState to ensure the queryClient instance is kept alive
   * during the whole life cicle
   */
  const queryClient = useInitialQueryClient(setOpenToast)
  const userMenuRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>Poke-dexApp</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themes[Themes.lightTheme]}>
          <Hydrate state={pageProps.dehydratedState}>
            <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <Fetching />
              <CssBaseline />
              <Toast message="React Query Error" open={openToast} close={handleCloseToast} severity="error" />
              <ClientOnly>
                <Layout userMenuRef={userMenuRef}>
                  {/* 
                  Implementation of ref and reactDom.createPortal() (Layout and UserMenu components)
                  this avoid navBar rendering with Context updates.
                  could be not necessary but I decided to let it for academic purposes
                   */}
                  <UserContext>
                    <UserMenu userMenuRef={userMenuRef} />
                    <Component {...pageProps} />
                  </UserContext>
                </Layout>
              </ClientOnly>
            </SnackbarProvider>
          </Hydrate>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
