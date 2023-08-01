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
}

// See "Matching Paths" below to learn more
// matcher: '/login/:path*',
export const config = {
  matcher: '/allPokemonsPagination',
}
