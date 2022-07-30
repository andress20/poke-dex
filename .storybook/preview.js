import { CssBaseline, ThemeProvider } from '@mui/material'
import themes, { Themes } from '../src/themes'
import Image from 'next/image'
import { muiTheme } from 'storybook-addon-material-ui'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

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
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

/* Theme Configuration */

//storyThemes contains all themes with an specific themeName that storybook needs to show in Material-UI addon section otherwise only would showing a number
const storyThemes = [
  {
    themeName: 'Light Theme',
    ...themes[Themes.lightTheme],
  },
  {
    themeName: 'Dark Theme',
    ...themes[Themes.darkTheme],
  },
]

// Add addon on top bar for switching themes
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'lightTheme',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['lightTheme', 'darkTheme'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}

const getTheme = themeName => {
  return themes[themeName]
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider, muiTheme(storyThemes.map(theme => theme))]
