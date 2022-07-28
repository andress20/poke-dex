// import * as NextImage from 'next/image'

// const OriginalNextImage = NextImage.default

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: props => <OriginalNextImage {...props} unoptimized />,
// })

import Image from 'next/image'
import { muiTheme } from 'storybook-addon-material-ui'

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

const newTheme = {
  themeName: 'Grey Theme',
  palette: {
    primary1Color: 'red',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#bdbdbd',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b',
    primary: {
      main: '#f00',
    },
  },
}

export const decorators = [muiTheme([newTheme])]
