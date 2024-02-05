import { renderWithThemeProvider } from '@tests'
import Dashboard from '@comp/organisms/dashboard'

test('should render dashboard', () => {
  const dashboard = renderWithThemeProvider(
    <Dashboard
      images={[
        {
          name: 'charmander',
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
        },
      ]}
    />
  )
  expect(dashboard).toBeTruthy()
})
