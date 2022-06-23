import type { AppProps } from 'next/app'
import Layout from '@comp/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout name="andres">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
