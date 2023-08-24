import { NextResponse } from 'next/server'
// allegedly we can charge css into server side or something according MUI
//https://mui.com/material-ui/guides/server-rendering/

// This function can be marked `async` if using `await` inside
export function middleware() {
  // const cache = createEmotionCache()
  // const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  // console.log('request.url:', request.url)
  // Render the component to a string.
  // const html = ReactDOMServer.renderToString(
  //   <CacheProvider
  // )
  // return NextResponse.redirect(new URL('/allPokemonsByType', 'http://localhost:3000'))
  //add the CORS headers to the response
  const res = NextResponse.next()
  res.headers.append('Access-Control-Allow-Credentials', 'true')
  res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  return res
}

// See "Matching Paths" below to learn more
// matcher: '/login/:path*',
export const config = {
  //matcher: '/api/:path*',
  //matcher: '/api/AllPokemonsImages/:path*',
}
