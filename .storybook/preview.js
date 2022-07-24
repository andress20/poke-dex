// import * as NextImage from 'next/image'

// const OriginalNextImage = NextImage.default

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: props => <OriginalNextImage {...props} unoptimized />,
// })

import Image from 'next/image'

// Image.propTypes = {
//   unoptimized: null,
// }

Image.defaultProps = {
  unoptimized: true,
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
