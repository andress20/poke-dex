import { render, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider, Theme } from '@mui/material'
import themes, { Themes } from '../themes/index'

export function renderWithThemeProvider(ui: ReactElement, theme?: Theme): RenderResult {
  const themeProvider = theme ?? themes[Themes.lightTheme]
  return render(<ThemeProvider theme={themeProvider}>{ui}</ThemeProvider>)
}
