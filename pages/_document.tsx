import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter'
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter'

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html>
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta name="description" content="Poke dex app" />
        <link rel="icon" href="/snorlax.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = documentGetInitialProps
