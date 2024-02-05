import { renderWithThemeProvider } from '@tests'
import Dashboard from '@comp/organisms/pokemonPagination'

test('should render dashboard', () => {
  renderWithThemeProvider(
    <Dashboard
      images={[
        {
          name: 'charmander',
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
        },
      ]}
    />
  )
})
