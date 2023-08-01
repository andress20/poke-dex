// not working
// allegedly we can charge css into server side or something according MUI
//https://mui.com/material-ui/guides/server-rendering/

import createCache from '@emotion/cache'

export default function createEmotionCache() {
  return createCache({ key: 'css' })
}
